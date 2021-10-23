import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemDetails({ match }) {
  //   const [id] = useParams();
  useEffect(async () => {
    getBooks();
  }, []);
  const [bookLists, setBookLists] = useState([]);
  const getBooks = () => {
    axios
      .get(`http://localhost:3001/Books/${match.params.id}`)
      .then((response) => {
        setBookLists(response.data[0]);

        console.log(response.data[0]);
      });
  };
  //   getBooks();

  return (
    <div>
      <div className="itemDetails-container">
        {/* <h1>Home &gt; Books &gt;</h1> */}
        <h1>{bookLists.Title}</h1>
      </div>
    </div>
  );
}

export default ItemDetails;
