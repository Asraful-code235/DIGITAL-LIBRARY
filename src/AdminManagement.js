import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";

function AdminManagement() {
  useEffect(() => {
    getUsers();
  }, []);
  const [person, setPerson] = useState([]);
  const getUsers = () => {
    axios.get(`http://localhost:3001/users`).then((response) => {
      setPerson(response.data);

      // console.log(response.data);
    });
  };
  //deleting books
  const deleteBooks = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`).then((response) => {
      setPerson(
        person.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  return (
    <div className="adminManagement-container">
      <div className="management">
        <div className="herder">
          <h1>Email</h1>
          <h1>Password</h1>
        </div>
        {person.map((val) => {
          return (
            <div key={val.id} className="person-container">
              <div className="person-info">
                <h3>{val.email}</h3>
                <h3>{val.password}</h3>
              </div>
              <div className="iconHandel" onClick={() => deleteBooks(val.id)}>
                <AiFillDelete fontSize="1.2rem" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminManagement;
