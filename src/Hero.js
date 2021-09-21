import React, { useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./css/main.css";
import { sliderInfo } from "./slider";
import { categoryRight } from "./CategoryRight";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Hero() {
  return (
    <section className="hero">
      <div className="first-screen">
        <div className="first-floor">
          <div className="col-left">
            <div className="home-category">
              <Component1 />
            </div>
          </div>
          <Component3 />
        </div>
      </div>
    </section>
  );
}

const Component1 = () => {
  const [isBlock, setBlock] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div className="category-left">
        <div className="left-title">
          <a href="">My Library</a>
        </div>

        <div className="left-market">
          <div
            id="FirstUnique"
            className={`link ${isActive ? "activate" : ""}`}
            onMouseEnter={() => {
              const l = document.getElementById("FirstUnique");
              const v = document.getElementById("Unique");
              const c = document.getElementById("thirdUnique");
              l.addEventListener("mouseover", () => {
                v.classList.add("block");
                l.classList.add("activate");
              });
              v.classList.remove("block");
            }}
            onMouseLeave={() => {
              const l = document.getElementById("FirstUnique");
              const v = document.getElementById("Unique");
              const c = document.getElementById("thirdUnique");
              l.addEventListener("mouseout", () => {
                v.classList.remove("block");
                l.classList.remove("activate");
                v.addEventListener("mouseover", () => {
                  v.classList.add("block");
                  l.classList.add("activate");
                  c.classList.add("Active");
                });
                v.addEventListener("mouseout", () => {
                  v.classList.remove("block");
                  l.classList.remove("activate");
                  c.classList.remove("Active");
                });
              });
            }}
          >
            <a href="#">
              <div
                id="thirdUnique"
                className={`category-item ${isHover ? "Active" : ""}`}
              >
                <div>
                  <span className="img">
                    <img
                      src="https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg"
                      alt=""
                    />
                  </span>
                  <span className="txt">Department</span>
                </div>
                <i className="prefixed-icon"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="category-right">
        <div id="Unique" className={`category-list ${isBlock ? "block" : " "}`}>
          {categoryRight.map((prop) => {
            return (
              <div key={prop.id} className={prop.closed}>
                <div className="category-layout">
                  <div className="category-items">
                    <h3 className="h3">{prop.txt}</h3>
                    <ul>
                      <li>
                        <a href="">{prop.item1}</a>
                      </li>
                      <li>
                        <a href="">{prop.item2}</a>
                      </li>
                      <li>
                        <a href="">{prop.item3}</a>
                      </li>
                      <li>
                        <a href="">{prop.item4}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
const Component3 = () => {
  // const [id, img, h3, p] = sliderInfo;
  return (
    <>
      <div className="col-right">
        {/* <div className="slider" id="slider">
          {sliderInfo.map((slides) => {
            <div key={slides.id} className={slides.cName}>
              <img src={slides.img} alt="" />
              <div className="info">
                <h3>{slides.h3}</h3>
                <p>{slides.p}</p>
              </div>
            </div>;
          })}
        </div> */}
        <div className="slider">
          <Splide
            options={{
              type: "loop",
              gap: "1.2rem",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              arrows: "slider",
            }}
            hasSliderWrapper
            hasAutoplayControls
            hasAutoplayProgress
          >
            {sliderInfo.map((slide) => (
              <SplideSlide key={slide.img} className="slide">
                <img src={slide.img} alt="" />
                <div className="info">
                  <h3>{slide.h3}</h3>
                  <p>{slide.p}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Hero;
