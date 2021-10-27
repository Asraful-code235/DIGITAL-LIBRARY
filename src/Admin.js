import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { MdUpdate } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
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
  // const updatePdf = (id) => {
  //   console.log(newFile);
  //   axios
  //     .post("http://localhost:3001/pdf", { pdf: newFile, id: id })
  //     .then((response) => {
  //       alert("updating please wait for sometime !");
  //       // setFile(
  //       //   bookList.map((val) => {
  //       //     return val.id === id
  //       //       ? {
  //       //           id: val.id,
  //       //           title: val.title,
  //       //           author: val.author,
  //       //           price: val.Price,
  //       //           category: val.category,
  //       //           pdf: val.newPdf,
  //       //         }
  //       //       : val;
  //       //   })
  //       // );
  //     });
  // };
  const [isActiveDd, setActiveDd] = useState(false);
  const handelDropdown = () => {
    setActiveDd(!isActiveDd);
    if (isActiveDd === true) {
      setActiveDd(isActiveDd);
    }
  };
  const [linkActive, setLinkActive] = useState(false);
  const handelLink = (e) => {
    if (linkActive === false && linkAct === true && isActiveDd === true) {
      setLinkActive(linkActive);
      setLinkAct(!linkAct);
      // setActiveDd(isActiveDd);

      // console.log("!linkactive and linkact");
    } else if (linkAct === true && linkActive === true && isActiveDd === true) {
      setLinkActive(!linkActive);
      setLinkAct(!linkAct);
      setActiveDd(!isActiveDd);

      // console.log("linkact true");
    } else if (linkActive === false && linkAct === false && linkAc === false) {
      // console.log("false");
    } else if (linkActive === true && linkAc === true) {
      setLinkActive(!linkActive);
      setLinkAc(!linkAc);
    }

    // setLinkActive(!linkActive);
    // setLinkAct(!linkAct);
    // setLinkAc(!linkAc);

    // console.log(e.target.className);
  };
  const [linkAct, setLinkAct] = useState(false);
  const handelSecond = () => {
    if (linkAct === false && linkActive === false) {
      setLinkAct(!linkAct);
      setLinkActive(!linkActive);
      // setLinkAc(!linkAc);
      // console.log("!linkact and !linkactive");
    } else if (linkAct === true && linkAc === true) {
      setLinkAct(linkAct);
      setLinkAc(!linkAc);
      // console.log("linkact");
    } else if (linkAct === false && linkAc === true) {
      setLinkAct(!linkAct);
      setLinkAc(!linkAc);
      // console.log("k");
    }
    // setLinkActive(!linkActive);
    // setLinkAct(!linkAct);
    // setLinkActive(!linkActive);
    // setLinkAc(!linkAc);
    // console.log(e.target.className);
  };
  const [linkAc, setLinkAc] = useState(false);
  const handelThird = () => {
    if (linkActive === false && linkAc === false) {
      setLinkAc(!linkAc);
      setLinkActive(!linkActive);
      // setActiveDd(isActiveDd);

      // console.log("works");
    } else if (linkAct === true && linkAc === false && isActiveDd === true) {
      // console.log("nice");
      setLinkAct(!linkAct);
      setLinkAc(!linkAc);
      setActiveDd(!isActiveDd);
    }
  };
  // getBooks();
  return (
    <section data-aos="fade-down-right" className="ImageGrid">
      <div className="control">
        <ul>
          <li
            className={`${linkActive ? "" : "defaultActive"}`}
            onClick={handelLink}
          >
            OVERVIEW
          </li>
          <div className="category-books" onClick={handelDropdown}>
            <li
              onClick={handelSecond}
              className={`${!linkAct ? "" : "defaultActive"}`}
            >
              CATEGORY
            </li>
            <div className="img">
              <IoMdArrowDropdown color="#fff" fontSize="1.2rem" />
            </div>
          </div>
          <li
            className={`${!linkAc ? "" : "defaultActive"}`}
            onClick={handelThird}
          >
            LATEST
          </li>
        </ul>
        <ul className={`category-books-items ${isActiveDd ? "active" : ""}`}>
          <li>CSE</li>
          <li>EEE</li>
          <li>STORY</li>
        </ul>
      </div>
      <div className="GridContainer">
        {bookList.map((val) => {
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
                    <h1>{val.Title}</h1>
                  </div>
                  <p>{val.Author}</p>
                  <p>Category:{val.Category}</p>
                  <h4>Price:{val.Price}$</h4>
                </div>
                {/* <div className="shelf-shadows"></div>
                <div className="shelf"></div> */}
              </div>
              <div className="info">
                <div className="btn_container">
                  <div className="btn">
                    <input
                      type="text"
                      placeholder="New title"
                      onChange={(event) => {
                        setNewTitle(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updateBooks(val.id);
                      }}
                      className="btnControl"
                    >
                      <MdUpdate color="white" fontSize="1.5em" />
                    </button>
                  </div>
                  <div className="btn">
                    <input
                      type="text"
                      placeholder="New Author "
                      onChange={(event) => {
                        setNewAuthor(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => updateAuthor(val.id)}
                      className="btnControl"
                    >
                      <MdUpdate color="white" fontSize="1.5em" />
                    </button>
                  </div>
                  <div className="btn">
                    <input
                      type="number"
                      placeholder="New Price "
                      onChange={(event) => {
                        setNewPrice(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => updatePrice(val.id)}
                      className="btnControl"
                    >
                      <MdUpdate color="white" fontSize="1.5em" />
                    </button>
                  </div>
                  <div className="btn">
                    <label htmlFor="">pdf</label>
                    <input
                      type="file"
                      name="myPdf"
                      id="name"
                      autoComplete="off"
                      onChange={pdfUpload}
                    />
                    <button className="btnUpdate btnControl">
                      <MdUpdate color="white" fontSize="1.5em" />
                    </button>
                  </div>
                  <div className="btn delete">
                    <button
                      className="btnDelete"
                      onClick={() => deleteBooks(val.id)}
                    >
                      <AiTwotoneDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Admin;
