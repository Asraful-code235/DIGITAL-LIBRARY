const express = require("express");
const app = express();
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const util = require("util");
const bcrypt = require("bcryptjs");
const { encrypt, decrypt } = require("./EncryptionHandler");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/public/images", express.static("public/images"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// app.use(
//   fileUpload({
//     createParentPath: true,
//   })
// );
// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "myfile") cb(null, "public/images");
    if (file.fieldname === "myPdf") {
      cb(null, "public");
    }
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "myfile") {
      cb(null, file.fieldname + "-" + Date.now() + "_" + file.originalname);
    }
    if (file.fieldname === "myPdf") {
      cb(null, file.fieldname + "-" + Date.now() + file.originalname);
    }
  },
});
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "myfile") {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } else {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
};
var upload = multer({ storage: storage });

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "librarysystem",
});
db.connect(function (err) {
  if (err) {
    return console.error("error" + err.message);
  }
  console.log("connected");
});
app.post("/create", upload.single("myfile"), (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const category = req.body.category;
  const price = req.body.price;
  const image = req.file.filename;
  // const pdf = req.file.filename;
  db.query(
    "INSERT INTO books (title, author,category, price,image) VALUES(?,?,?,?,?)",
    [title, author, category, price, image],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
      }
    }
  );
});
//pdf input
app.post("/pdf", upload.single("myPdf"), (req, res) => {
  const title = req.body.title;
  const id = req.body.id;
  // const author = req.body.author;
  // const category = req.body.category;
  // const price = req.body.price;
  // const image = req.file.filename;
  const pdf = req.file.filename;
  db.query(
    "INSERT INTO pdf (title,id,pdf) VALUES(?,?,?)",
    [title, id, pdf],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
      }
    }
  );
});
//login auth
app.post("/authentication", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // const hashedPassword = encrypt(password);
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      "INSERT INTO auth (email, password) VALUES (?, ?)",
      [email, hashedPassword],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("value inserted");
        }
      }
    );
  } catch {
    res.status(500).send();
  }
});
// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   // const password = req.body.password;
//   const hashedPassword = encrypt(password);
//   db.query(
//     "SELECT * FROM auth WHERE email=? AND password=?",
//     [email, password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }

//       if (result.length > 0) {
//         res.send(result);
//       } else {
//         res.send({ message: "Wrong email/password" });
//       }
//     }
//   );
// });
// app.post("/login", (req, res) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;
//     db.connect(async (err, connection) => {
//       if (err) res.send(err);
//       const sqlSearch = "SELECT * FROM auth WHERE email = ?";
//       const search_query = mysql.format(sqlSearch, [email]);
//       db.query(search_query, async (err, result) => {
//         if (err) res.send();
//         if (result.length == 0) {
//           console.log("User does not exist");
//           res.status(500).send();
//         } else {
//           const hashedPassword = result[0].password;
//           if (await bcrypt.compare(password, hashedPassword)) {
//             console.log("login Successful");
//             res.send("valid");
//           } else {
//             console.log("password incorrect");
//             res.send("Password incorrect");
//           }
//         }
//       });
//     });
//   } catch (e) {
//     console.log("something broke");
//     res.status(500).send();
//   }
// });
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query("SELECT * FROM auth WHERE email = ?;", email, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: "wrong user/password" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
});

// app.post("/post", upload.single("myPdf"), (req, res) => {
//   const pdf = req.file.filename;
//   // const pdf = req.file.filename;
//   db.query("INSERT INTO pdfs (pdf) VALUES(?)", pdf, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send("values Inserted");
//     }
//   });
// });
// app.post("/post", async (req, res) => {
//   try {
//     if (!req.files) {
//       res.send({
//         status: false,
//         message: "NO files",
//       });
//     } else {
//       const { myFile } = req.files;
//       myFile.mv("./public" + myFile.name);
//       res.send({
//         status: true,
//         message: "File is uploaded",
//       });
//     }
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get(`/Books/:id`, (req, res) => {
  db.query("SELECT * FROM books where id= ?", req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
});
app.get(`/Books/:id/:Category`, (req, res) => {
  db.query(
    "SELECT * FROM books WHERE Category = 'CSE' ",
    // req.params.id,
    req.params.Category,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});
//get every category items
app.get(`/items/:Category`, (req, res) => {
  db.query(
    "SELECT * FROM books WHERE Category = ? ",
    // req.params.id,
    req.params.Category,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});
//Getting the latest items from the database
app.get(`/latest`, (req, res) => {
  db.query("SELECT * FROM books ORDER BY id DESC LIMIT  5", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
});

//SELECT * FROM librarysystem.pdf INNER JOIN librarysystem.books WHERE librarysystem.pdf.Title=librarysystem.books.Title;

app.get(`/Books/:id/:Category/pdf`, (req, res) => {
  // const pdf = req.body.pdfId;
  db.query(
    "SELECT * FROM pdf WHERE id= ?",

    req.params.id,
    // req.params.Category,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});
//SELECT id FROM librarysystem.books WHERE id=(SELECT MAX(id)from librarysystem.books);
//getting last id for pdf insertion purposes
app.get(`/lastId`, (req, res) => {
  db.query(
    "SELECT id FROM books WHERE id=(SELECT MAX(id)from books);",
    // req.params.id,
    // req.params.Category,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});
//SELECT * FROM librarysystem.auth;
app.get(`/users`, (req, res) => {
  db.query("SELECT * FROM auth", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
});

//updating database
app.put("/update", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;

  db.query(
    "UPDATE books SET title = ? WHERE id= ?",
    [title, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// app.post("/pdf", upload.single("myPdf"), (req, res) => {
//   const id = req.body.id;
//   const pdf = req.file.filename;

//   db.query(
//     "INSERT INTO books COLUMN pdf = ? WHERE id= ?",
//     [pdf, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
app.put("/author", (req, res) => {
  const id = req.body.id;
  const author = req.body.author;
  db.query(
    "UPDATE books SET author= ? WHERE id= ?",
    [author, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/price", (req, res) => {
  const id = req.body.id;
  const price = req.body.price;
  db.query(
    "UPDATE books SET price= ? WHERE id= ?",
    [price, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// app.post("/image", upload.single("myfile"), (req, res) => {
//   const id = req.body.id;
//   const image = req.file.filename;
//   db.query(
//     "UPDATE books SET image= ? WHERE id= ?",
//     [image, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//         console.log(result);
//       }
//     }
//   );
// });

//deleting from database

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM books WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//delete user from database
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM auth WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("works server running 3001");
});
