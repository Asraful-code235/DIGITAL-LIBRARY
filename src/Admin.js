import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { MdUpdate } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import CircularProgress from "@mui/material/CircularProgress";

function Admin() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
    getBooks();
  }, []);
  const [bookList, setBookList] = useState([]);
  const getBooks = () => {
    axios.get("http://localhost:3001/books").then((response) => {
      setBookList(response.data);

      // console.log("blocked");
    });
  };
  const [newTitle, setNewTitle] = useState("");
  const updateBooks = (id) => {
    axios
      .put("http://localhost:3001/update", { title: newTitle, id: id })
      .then((response) => {
        alert("Updating please wait for sometime !");
        setNewTitle(
          bookList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  title: val.newTitle,
                  author: val.author,
                  price: val.price,
                  category: val.category,
                }
              : val;
          })
        );
      });
  };
  const [newAuthor, setNewAuthor] = useState("");
  const updateAuthor = (id) => {
    axios
      .put("http://localhost:3001/author", { author: newAuthor, id: id })
      .then((response) => {
        alert("Updating please wait for sometime !");
        setNewAuthor(
          bookList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  title: val.title,
                  author: val.newAuthor,
                  price: val.price,
                  category: val.category,
                }
              : val;
          })
        );
      });
  };
  const [newPrice, setNewPrice] = useState(0);
  const updatePrice = (id) => {
    axios
      .put("http://localhost:3001/price", { price: newPrice, id: id })
      .then((response) => {
        alert("updating please wait for sometime !");
        setNewPrice(
          bookList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  title: val.title,
                  author: val.author,
                  price: val.newPrice,
                  category: val.category,
                  image: val.image,
                }
              : val;
          })
        );
      });
  };
  const deleteBooks = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setBookList(
        bookList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const [newFile, setFile] = useState({ profilePdf: "" });
  const pdfUpload = (e) => {
    setFile({ ...newFile, profilePdf: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  const addPdfs = () => {
    // console.log(input.profilePic, "==", input.profilePic.name);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("id", id);
    // formdata.append("category", category);
    // formdata.append("price", price);
    // formdata.append("myPdf", input.profilePic, input.profilePic.name);
    formdata.append("myPdf", newFile.profilePdf, newFile.profilePdf.name);
    // console.log("myfile", input.profilePic, input.profilePic.name);

    // console.log(newFile.profilePdf, newFile.profilePdf.name);

    axios.post("http://localhost:3001/pdf", formdata).then((res) => {
      console.log("success");
      // console.log(formdata);
    });
  };

  const [searchTermAdmin, setSearchTermAdmin] = useState("");

  // getBooks();
  return (
    <section className="ImageGrid">
      <div className="search-box-admin">
        <input
          type="text"
          className="search-txt"
          placeholder="type to search by title/category"
          onChange={(event) => {
            setSearchTermAdmin(event.target.value);
          }}
        />
      </div>
      <div className="GridContainer-admin">
        {bookList
          .filter((val) => {
            if (searchTermAdmin == "") {
              return val;
            } else if (
              val.Category.toLowerCase().includes(searchTermAdmin.toLowerCase())
            ) {
              return val;
            } else if (
              val.Title.toLowerCase().includes(searchTermAdmin.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="containerBook" key={val.id}>
                <div className="imgContainer">
                  <div className="book-grid">
                    <img
                      src={`http://localhost:3001/public/images/${val.image}`}
                      alt="img"
                    />
                  </div>
                  <div className="info-header">
                    <div className="header">
                      <div className="h1">
                        <h1>Title</h1>
                      </div>
                      <h1>{val.Title}</h1>
                    </div>
                    <div className="header">
                      <div className="h1">
                        <h1>Author</h1>
                      </div>
                      <p>{val.Author}</p>
                    </div>
                    <div className="header">
                      <div className="h1">
                        <h1>Category</h1>
                      </div>
                      <p>{val.Category}</p>
                    </div>
                    <div className="header">
                      <div className="h1">
                        <h1>Price</h1>
                      </div>
                      <h4>{val.Price}$</h4>
                    </div>
                  </div>
                  {/* <div className="shelf-shadows"></div>
                <div className="shelf"></div> */}
                </div>
                <div className="info">
                  <Box
                    className="Admin-box"
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      className="Box"
                      id="outlined-basic"
                      label="New title"
                      variant="outlined"
                      onChange={(event) => {
                        setNewTitle(event.target.value);
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={() => {
                        updateBooks(val.id);
                      }}
                    >
                      <MdUpdate color="white" fontSize="1.5em" />
                    </Button>
                  </Box>
                  <Box
                    className="Admin-box"
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      className="Box"
                      id="outlined-basic"
                      label="New Author"
                      variant="outlined"
                      onChange={(event) => {
                        setNewAuthor(event.target.value);
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={() => {
                        updateAuthor(val.id);
                      }}
                    >
                      <MdUpdate color="white" fontSize="1.5em" />
                    </Button>
                  </Box>
                  <Box
                    className="Admin-box"
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      className="Box"
                      type="number"
                      id="outlined-basic"
                      label="New Price"
                      variant="outlined"
                      onChange={(event) => {
                        setNewPrice(event.target.value);
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={() => {
                        updatePrice(val.id);
                      }}
                    >
                      <MdUpdate color="white" fontSize="1.5em" />
                    </Button>
                  </Box>
                  <Button
                    className="btn-delete"
                    variant="outlined"
                    onClick={() => deleteBooks(val.id)}
                    startIcon={<AiTwotoneDelete />}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Admin;
