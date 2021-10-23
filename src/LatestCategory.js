import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function LatestCategory() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [bookList, setBookList] = useState([]);

  const addBooks = () => {
    // console.log(input.profilePic, "==", input.profilePic.name);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("author", author);
    formdata.append("category", category);
    formdata.append("price", price);
    formdata.append("myfile", input.profilePic, input.profilePic.name);
    formdata.append("myPdf", newFile.pdf, newFile.pdf.name);
    console.log(formdata);

    axios.post("http://localhost:3001/create", formdata).then((res) => {
      console.log("success");
      // console.log(formdata.data);
    });
  };

  const getBooks = () => {
    axios.get("http://localhost:3001/books").then((response) => {
      setBookList(response.data);
    });
  };
  const [input, setInput] = useState({ profilePic: "" });
  const imageUpload = (e) => {
    console.log(e.target.files[0]);
    setInput({ ...input, profilePic: e.target.files[0] });
  };
  const [newFile, setFile] = useState({ profilePdf: "" });
  const pdfUpload = (e) => {
    setFile({ ...newFile, pdf: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  // const [register, handelSubmit] = useState();
  // const onsubmit = (data) => {
  //   const formData = new FormData();
  //   formData.append("myPdf", data.myPdf[0]);
  //   const res = fetch("http://localhost:3001/post", {
  //     method: "POST",
  //     body: formData,
  //   }).then((res) => {
  //     res.json();
  //     alert(JSON.stringify(res));
  //   });
  // };

  return (
    <>
      <section data-aos="fade-up" className="latestCategory">
        <div className="container">
          <p className="Field">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter book title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </p>
          <p className="Field">
            <label htmlFor="">Author</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter author name"
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </p>
          <p className="Field">
            <label htmlFor="">Category</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter category"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
          </p>
          {/* <p className="Field">
            <label htmlFor="">Date</label>
            <input
              type="datetime-local"
              name=""
              id=""
              placeholder="Enter time"
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </p> */}
          <p className="Field ">
            <label htmlFor="">Price</label>
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter book price"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </p>

          <div className="Dashboard_crud">
            <label htmlFor="">Image</label>
            <input
              type="file"
              name="myfile"
              id="name"
              required
              autoComplete="off"
              onChange={imageUpload}
            />
          </div>
          <div className="Dashboard_crud">
            <label htmlFor="">Pdf</label>
            <input
              type="file"
              name="myPdf"
              required
              autoComplete="off"
              onChange={pdfUpload}
            />
            {/* <button className="submit">Pdf Submit</button> */}
          </div>
          <button type="submit" className="submit" onClick={addBooks}>
            Add
          </button>

          {/* <div>
            {bookList.map((val) => {
              return (
                <div className="containerBooks">
                  <h1>{val.Title}</h1>
                  <p>{val.Author}</p>
                  <h4>{val.Price}</h4>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default LatestCategory;
