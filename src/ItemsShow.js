import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link } from "react-router-dom";
function ItemsShow() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
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
            return val.id == id
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
            return val.id == id
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
            return val.id == id
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
          return val.id != id;
        })
      );
    });
  };
  const [newImage, setNewImage] = useState("");
  const updateImage = (id) => {
    axios
      .put("http://localhost:3001/image", { image: newImage, id: id })
      .then((response) => {
        alert("updating please wait for sometime !");
        setNewImage(
          bookList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  title: val.title,
                  author: val.author,
                  price: val.Price,
                  category: val.category,
                  image: val.newImage,
                }
              : val;
          })
        );
      });
  };
  const [isActiveDd, setActiveDd] = useState(false);
  const handelDropdown = () => {
    setActiveDd(!isActiveDd);
    if (isActiveDd == true) {
      setActiveDd(isActiveDd);
    }
  };
  const [linkActive, setLinkActive] = useState(false);
  const handelLink = (e) => {
    if (linkActive == false && linkAct == true && isActiveDd == true) {
      setLinkActive(linkActive);
      setLinkAct(!linkAct);
      // setActiveDd(isActiveDd);

      // console.log("!linkactive and linkact");
    } else if (linkAct == true && linkActive == true && isActiveDd == true) {
      setLinkActive(!linkActive);
      setLinkAct(!linkAct);
      setActiveDd(!isActiveDd);

      // console.log("linkact true");
    } else if (linkActive == false && linkAct == false && linkAc == false) {
      // console.log("false");
    } else if (linkActive == true && linkAc == true) {
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
    if (linkAct == false && linkActive == false) {
      setLinkAct(!linkAct);
      setLinkActive(!linkActive);
      // setLinkAc(!linkAc);
      // console.log("!linkact and !linkactive");
    } else if (linkAct == true && linkAc == true) {
      setLinkAct(linkAct);
      setLinkAc(!linkAc);
      // console.log("linkact");
    } else if (linkAct == false && linkAc == true) {
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
    if (linkActive == false && linkAc == false) {
      setLinkAc(!linkAc);
      setLinkActive(!linkActive);
      // setActiveDd(isActiveDd);

      // console.log("works");
    } else if (linkAct == true && linkAc == false && isActiveDd == true) {
      // console.log("nice");
      setLinkAct(!linkAct);
      setLinkAc(!linkAc);
      setActiveDd(!isActiveDd);
    }
  };
  getBooks();
  return (
    <section data-aos="fade-up" className="ImageGrid">
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
            <div className="containerBooks" key={val.id}>
              <Link to={`Books/${val.id}`}>
                <div className="imgContainer">
                  <div className="book-grid">
                    <img
                      src={`http://localhost:3001/public/images/${val.image}`}
                    />
                  </div>
                  {/* <div className="shelf-shadows"></div>
                <div className="shelf"></div> */}
                </div>
                <div className="info">
                  <div className="header">
                    <h1>{val.Title}</h1>
                  </div>
                  <p>{val.Author}</p>
                  {/* <p>Category:{val.Category}</p> */}
                  {/* <h4>Price:{val.Price}$</h4> */}
                  <div className="btn_container">
                    {/* <div className="btn">
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
                    <button onClick={() => updateAuthor(val.id)}>
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
                    <button onClick={() => updatePrice(val.id)}>
                      <MdUpdate color="white" fontSize="1.5em" />
                    </button>
                  </div> */}
                    {/* <div>
                    <label htmlFor="">pdf</label>
                    <input
                      type="file"
                      name="myfile"
                      id="name"
                      autoComplete="off"
                      onChange={(event) => {
                        setNewImage(event.target.files[0]);
                      }}
                    />
                    <button onClick={() => updateImage(val.id)}>Update</button>
                  </div> */}
                    <div className="btnControl">
                      {/* <button
                      className="btnDelete"
                      onClick={() => deleteBooks(val.id)}
                    >
                      <AiTwotoneDelete color="#fff" fontSize="1.5em" />
                    </button> */}
                      {/* <button
                      className="btnDownload"
                      // onClick={() => deleteBooks(val.id)}
                    >
                      <FaFileDownload color="#fff" fontSize="1.5em" />
                      Download
                    </button> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ItemsShow;
