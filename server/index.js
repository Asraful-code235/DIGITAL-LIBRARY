const express = require("express");
const app = express();
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const util = require("util");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/public/images", express.static("public/images"));
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
app.post("/authentication", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "INSERT INTO auth (email, password) VALUES (?, ?)",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("value inserted");
      }
    }
  );
});
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "SELECT * FROM auth WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong email/password" });
      }
    }
  );
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

app.listen(3001, () => {
  console.log("works server running 3001");
});
