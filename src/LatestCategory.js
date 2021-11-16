import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function LatestCategory() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getLastId();
    return () => {
      getLastId();
    };
  }, []);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [lastId, setLastId] = useState([]);
  const getLastId = () => {
    axios.get(`http://localhost:3001/lastId`).then((response) => {
      setLastId(response.data[0]);

      // console.log(response.data);
    });
  };

  const addBooks = () => {
    // console.log(input.profilePic, "==", input.profilePic.name);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("author", author);
    formdata.append("category", category);
    formdata.append("price", price);
    formdata.append("myfile", input.profilePic, input.profilePic.name);
    // formdata.append("myPdf", newFile.profilePdf, newFile.profilePdf.name);
    // console.log("myfile", input.profilePic, input.profilePic.name);

    // console.log(newFile.profilePdf, newFile.profilePdf.name);

    axios.post("http://localhost:3001/create", formdata).then((res) => {
      console.log("success");

      // console.log(formdata);
    });
  };
  const [PdfTitle] = useState("");
  const [PdfId, setPdfId] = useState(0);

  const [newFile, setFile] = useState({ profilePdf: "" });
  const pdfUpload = (e) => {
    setFile({ ...newFile, profilePdf: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  const addPdfs = () => {
    // console.log(input.profilePic, "==", input.profilePic.name);
    const formdata = new FormData();
    formdata.append("title", PdfTitle);
    formdata.append("id", PdfId);
    // formdata.append("category", category);
    // formdata.append("price", price);
    // formdata.append("myPdf", input.profilePic, input.profilePic.name);
    formdata.append("myPdf", newFile.profilePdf, newFile.profilePdf.name);
    console.log(formdata.data);
    // console.log("myfile", input.profilePic, input.profilePic.name);

    // console.log(newFile.profilePdf, newFile.profilePdf.name);

    axios.post("http://localhost:3001/pdf", formdata).then((res) => {
      console.log("success");
      alert("inserted");
      // console.log(formdata);
    });
  };

  const [input, setInput] = useState({ profilePic: "" });
  const imageUpload = (e) => {
    console.log(e.target.files[0]);
    setInput({ ...input, profilePic: e.target.files[0] });
  };
  // const [newFile, setFile] = useState({ profilePdf: "" });
  // const pdfUpload = (e) => {
  //   setFile({ ...newFile, profilePdf: e.target.files[0] });
  //   console.log(e.target.files[0].name);
  // };
  //material ui
  const [Department, setDepartment] = useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <>
      {/* data-aos="fade-down-right" */}
      <section className="latestCategory">
        <div className="container">
          <Box
            style={{ padding: "10px 0" }}
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
              label="Title"
              variant="outlined"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Box>
          <Box
            component="form"
            style={{ padding: "10px 0" }}
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Author"
              variant="outlined"
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Department}
                label="Department"
                onChange={handleChange}
              >
                <MenuItem value={"CSE"}>CSE</MenuItem>
                <MenuItem value={"EEE"}>EEE</MenuItem>
                <MenuItem value={"BBA"}>BBA</MenuItem>
                <MenuItem value={"LAW"}>LAW</MenuItem>
                <MenuItem value={"TEXTILE"}>TEXTILE</MenuItem>
                <MenuItem value={"STORY"}>STORY</MenuItem>
                <MenuItem value={"ACTION"}>ACTION</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              type="number"
              label="Price"
              variant="outlined"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </Box>
          {/* <p className="Field ">
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
          </p> */}
          <div className="mb-3">
            <label for="formFile" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="myfile"
              onChange={imageUpload}
            />
          </div>

          {/* <div className="Dashboard_crud">
            <label htmlFor="">Image</label>
            <input
              type="file"
              name="myfile"
              id="name"
              required
              autoComplete="off"
              onChange={imageUpload}
            />
          </div> */}

          <p className="Field ">
            {lastId && <h4>CurrentId---:{lastId.id}</h4>}
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Enter the next number"
                variant="outlined"
                value={PdfId}
                onChange={(event) => {
                  setPdfId(event.target.value);
                }}
              />
            </Box>
          </p>

          <div className="mb-3">
            <label for="formFile" className="form-label">
              PDF
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="myPdf"
              onChange={pdfUpload}
            />
          </div>

          {/* <button className="submit" onClick={addPdfs}>
              Pdf Submit
            </button> */}

          <Button
            disabled={!PdfId}
            variant="contained"
            onClick={() => {
              addBooks();
              addPdfs();
            }}
          >
            Add
          </Button>
        </div>
      </section>
    </>
  );
}

export default LatestCategory;
