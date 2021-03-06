import React, { useEffect } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./css/main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { sliderInfo } from "./slider";
import { categoryRight } from "./CategoryRight";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import FrontendInfo from "./FrontendInfo";
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <section className="hero">
        <div data-aos="fade-right" className="first-screen">
          <div className="first-floor">
            <div className="img-container">
              {/* <img src="./optimized-11.png" alt="" /> */}
            </div>
            <div className="col-left">
              <div data-aos="fade-up" className="home-category">
                <Component1 />
              </div>
            </div>
            <Component3 />
          </div>
        </div>
      </section>
      <FrontendInfo />
    </>
  );
}

const Component1 = () => {
  return (
    <>
      <div className="category-left">
        <div className="left-title">
          <a href="/">My Library</a>
        </div>

        <div className="left-market">
          <div
            id="FirstUnique"
            className={`link `}
            onMouseEnter={() => {
              const l = document.getElementById("FirstUnique");
              const v = document.getElementById("Unique");
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
            <a href="Books">
              <div id="thirdUnique" className={`category-item `}>
                <div>
                  <span className="img">
                    <img
                      src="https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg"
                      alt=""
                    />
                  </span>
                  <span className="txt">Category</span>
                </div>
                <i className="prefixed-icon"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="category-right">
        <div id="Unique" className={`category-list`}>
          {categoryRight.map((prop) => {
            return (
              <div key={prop.id} className={prop.closed}>
                <div className="category-layout">
                  <div className="category-items">
                    <h3 className="h3">{prop.txt}</h3>
                    <ul>
                      <li>
                        <Link to="/items/CSE">{prop.item1}</Link>
                      </li>
                      <li>
                        <Link to="/items/eee">{prop.item2}</Link>
                      </li>
                      <li>
                        <Link to="/items/textile">{prop.item3}</Link>
                      </li>
                      <li>
                        <Link to="/items/bba">{prop.item4}</Link>
                      </li>
                      <li>
                        <Link to="/items/law">{prop.item5}</Link>
                      </li>
                      <li>
                        <Link to="/items/story">{prop.item6}</Link>
                      </li>
                      <li>
                        <Link to="/items/action">{prop.item7}</Link>
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
