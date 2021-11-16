import React, { useState } from "react";
import aboutLogo from "./images/rsz_digitallibrary.png";
import Footer from "./Footer";

const CoreItems = [
  {
    id: 1,
    src: "https://s-f.scribdassets.com/images/about/01_about_D_icon_value_01_people.svg?1eea98c0a",
    h1: "We are characters with character",
    highlight: "People:",
    p: "We value people above everything else.We invest in our employees and believe that diverse stories,ideas,and talents are what make us great",
  },
  {
    id: 2,
    src: "https://s-f.scribdassets.com/images/about/01_about_D_icon_value_02_learning.svg?1eea98c0a",
    h1: "We embrace plot twists.",
    highlight: "Taking action and learning:",
    p: " We are problem-solvers that act with urgency. We use both data and intuition to tackle tough challenges and balance priorities, we grow through our mistakes, and often learn by doing.",
  },
  {
    id: 3,
    src: "https://s-f.scribdassets.com/images/about/01_about_D_icon_value_03_ownership.svg?1eea98c0a",
    h1: "We are writing our story together.",
    highlight: "Ownership and accountability:",
    p: "We are all owners. We hold ourselves and each other accountable, engage in open dialogue, and we push one another to do our best work every day.",
  },
  {
    id: 4,
    src: "https://s-f.scribdassets.com/images/about/01_about_D_icon_value_04_sustainability.svg?1eea98c0a",
    h1: "We are crafting a timeless tale.",
    highlight: "Sustainability: ",
    p: "We are dedicated to our mission. We are strategic and take deliberate steps to build a sustainable business that will stand the test of time.",
  },
  {
    id: 5,
    src: "https://s-f.scribdassets.com/images/about/01_about_D_icon_value_05_community.svg?1eea98c0a",
    h1: "We are dedicated to helping readers flourish.",
    highlight: "Community:",
    p: "We care deeply about our customers. Our community is the soul of the product and we work hard to understand and meet their needs.",
  },
  {
    id: 6,
    src: "https://s-f.scribdassets.com/images/about/01_about_D_icon_value_06_love.svg?1eea98c0a",
    h1: "We are inspired by reading.",
    highlight: "Love of reading:",
    p: "We believe in the importance of reading and use our product to make it a meaningful part of our lives.",
  },
];
function DigitalLInfo() {
  const [info] = useState(CoreItems);
  return (
    <>
      <div className="about-container">
        <div className="AboutUs-container">
          <div className="about-inner">
            <div className="text">
              <h1>WHAT WE DO</h1>
              <p>
                Digital Library brings together the best of the written word to
                help readers become their best selves.
              </p>
            </div>
            <div className="img">
              <img src={aboutLogo} alt="logoImg" />
            </div>
          </div>
          <div className="mission">
            <h1>
              OUR <span>MISSION</span>
            </h1>
            <h4>To make books available to everyone.</h4>
          </div>
        </div>
        <div className="CoreValues">
          <h1>OUR CORE VALUES</h1>
          <div className="valueContainer">
            <div className="items">
              {info.map((props) => {
                const { id, src, h1, highlight, p } = props;
                return (
                  <div key={id} className="items-container">
                    <div className="img-container-about">
                      {/* <h1>hellow</h1> */}
                      {/* <img
                        src="https://s-f.scribdassets.com/images/about/01_about_D_icon_value_04_sustainability.svg?1eea98c0a"
                        alt=""
                      /> */}
                      <img src={src} alt="img" />
                    </div>
                    <div className="itemsInfo">
                      <h1>{h1}</h1>
                      <p>
                        <span>{highlight}</span>
                        {p}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DigitalLInfo;
