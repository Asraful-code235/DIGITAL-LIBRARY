import React, { useState, useEffect } from "react";
import Charts from "./Charts";
import logo from "./images/women.PNG";
import axios from "axios";

function Main() {
  useEffect(() => {
    NumberOfBooks();
    return () => {
      NumberOfBooks();
    };
  }, []);
  const [booksNumber, setBooksNumber] = useState([]);
  const NumberOfBooks = () => {
    axios.get("http://localhost:3001/countBooks").then((response) => {
      setBooksNumber(response.data.length);
      // console.log(response.data.length);
    });
  };
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <img src={logo} alt="" />
          <div className="main_greeting">
            <h1>Controller</h1>
            <p>Welcome</p>
          </div>
        </div>
        <div className="main_cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Books</p>
              <span className="font-bold text-title">{booksNumber}</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-calendar fa-2x text red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Times of reading</p>
              <span className="font-bold text-title">2400</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">24</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Request</p>
              <span className="font-bold text-title">10</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts_left">
            <div className="charts_left_title">
              <div>
                <h1>Daily Reports</h1>
                <p>Mirput,Dhaka,Bangladesh</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Charts />
          </div>
          <div className="charts_right">
            <div className="charts_right_title">
              <div>
                <h1>Stats Reports</h1>
                <p>Mirpur,Dhaka,Bangladesh</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <div className="carts_right_cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,00</p>
              </div>
              <div className="card2">
                <h1>Sales</h1>
                <p>$120,00</p>
              </div>
              <div className="card3">
                <h1>Users</h1>
                <p>750</p>
              </div>
              <div className="card4">
                <h1>Orders</h1>
                <p>7773</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
