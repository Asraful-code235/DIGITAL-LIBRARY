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
app.use(fileUpload());
// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "myfile") cb(null, "public/images");
    else if (file.fieldname === "myPdf") {
      cb(null, "public");
    }
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "myfile") {
      cb(null, file.fieldname + "-" + Date.now() + "_" + file.originalname);
    } else if (file.fieldname === "myPdf") {
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
var uploadMultiple = upload.fields([
  { name: "myfile", maxCount: 2 },
  { name: "myPdf", maxCount: 2 },
]);

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
// upload.single("myfile"),
app.post("/create", uploadMultiple, (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const category = req.body.category;
  const price = req.body.price;
  const image = req.files[0].filename;
  const pdf = req.files[0].filename;
  db.query(
    "INSERT INTO books (title, author,category, price,image,pdf) VALUES(?,?,?,?,?,?)",
    [title, author, category, price, image, pdf],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
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
