import React, { useState } from "react";
import Footer from "./Footer";
function Join() {
  const [card, setCard] = useState(false);
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [btnActive1, setBtnActive1] = useState(false);
  const [btnActive2, setBtnActive2] = useState(false);
  const [btnActive3, setBtnActive3] = useState(false);
  const [btnActive4, setBtnActive4] = useState(false);
  const [about, setAbout] = useState(false);
  const [about1, setAbout1] = useState(false);
  const [about2, setAbout2] = useState(false);
  const [about3, setAbout3] = useState(false);
  const handelAbout = () => {
    if (btnExperience1 === true && btnContact1 === false) {
      setBtnActive1(false);
      setBtnExp1(false);
      setBtnCon1(false);
      setExp(false);
      setAbout(false);
      setCard(false);
      setCon(false);
    } else if (btnExperience1 === false && btnContact1 === true) {
      setBtnActive1(false);
      setBtnExp1(false);
      setBtnCon1(false);
      setExp(false);
      setAbout(false);
      setCard(false);
      setCon(false);
    }
  };
  //card2
  const handelAbout1 = () => {
    if (btnExperience2 === true && btnContact2 === false) {
      setBtnActive2(false);
      setBtnExp2(false);
      setBtnCon2(false);
      setExp1(false);
      setAbout1(false);
      setCard1(false);
      setCon1(false);
    } else if (btnExperience2 === false && btnContact2 === true) {
      setBtnActive2(false);
      setBtnExp2(false);
      setBtnCon2(false);
      setExp1(false);
      setAbout1(false);
      setCard1(false);
      setCon1(false);
    }
  };
  //card3
  const handelAbout2 = () => {
    if (btnExperience3 === true && btnContact3 === false) {
      setBtnActive3(false);
      setBtnExp3(false);
      setBtnCon3(false);
      setExp2(false);
      setAbout2(false);
      setCard2(false);
      setCon2(false);
    } else if (btnExperience3 === false && btnContact3 === true) {
      setBtnActive3(false);
      setBtnExp3(false);
      setBtnCon3(false);
      setExp2(false);
      setAbout2(false);
      setCard2(false);
      setCon2(false);
    }
  };
  //card4
  const handelAbout3 = () => {
    if (btnExperience4 === true && btnContact4 === false) {
      setBtnActive4(false);
      setBtnExp4(false);
      setBtnCon4(false);
      setExp3(false);
      setAbout3(false);
      setCard3(false);
      setCon3(false);
    } else if (btnExperience4 === false && btnContact4 === true) {
      setBtnActive4(false);
      setBtnExp4(false);
      setBtnCon4(false);
      setExp3(false);
      setAbout3(false);
      setCard3(false);
      setCon3(false);
    }
  };
  //experience
  const [btnExperience1, setBtnExp1] = useState(false);
  const [btnExperience2, setBtnExp2] = useState(false);
  const [btnExperience3, setBtnExp3] = useState(false);
  const [btnExperience4, setBtnExp4] = useState(false);
  const [exp, setExp] = useState(false);
  const [exp1, setExp1] = useState(false);
  const [exp2, setExp2] = useState(false);
  const [exp3, setExp3] = useState(false);
  const handelExp = () => {
    if (btnActive1 === false && btnExperience1 === false) {
      setBtnExp1(true);
      setBtnActive1(true);
      setBtnCon1(false);
      setExp(true);
      setAbout(true);
      setCard(true);
      setCon(false);
    } else if (btnActive1 === true && btnContact1 === true) {
      setBtnExp1(true);
      setBtnActive1(true);
      setBtnCon1(false);
      setExp(true);
      setAbout(true);
      setCard(true);
      setCon(false);
    }
  };
  //card2
  const handelExp1 = () => {
    if (btnActive2 === false && btnExperience2 === false) {
      setBtnExp2(true);
      setBtnActive2(true);
      setBtnCon2(false);
      setExp1(true);
      setAbout1(true);
      setCard1(true);
      setCon1(false);
    } else if (btnActive2 === true && btnContact2 === true) {
      setBtnExp2(true);
      setBtnActive2(true);
      setBtnCon2(false);
      setExp1(true);
      setAbout1(true);
      setCard1(true);
      setCon1(false);
    }
  };
  //card3
  const handelExp2 = () => {
    if (btnActive3 === false && btnExperience3 === false) {
      setBtnExp3(true);
      setBtnActive3(true);
      setBtnCon3(false);
      setExp2(true);
      setAbout2(true);
      setCard2(true);
      setCon2(false);
    } else if (btnActive3 === true && btnContact3 === true) {
      setBtnExp3(true);
      setBtnActive3(true);
      setBtnCon3(false);
      setExp2(true);
      setAbout2(true);
      setCard2(true);
      setCon2(false);
    }
  };
  //card4
  const handelExp3 = () => {
    if (btnActive4 === false && btnExperience4 === false) {
      setBtnExp4(true);
      setBtnActive4(true);
      setBtnCon4(false);
      setExp3(true);
      setAbout3(true);
      setCard3(true);
      setCon3(false);
    } else if (btnActive4 === true && btnContact4 === true) {
      setBtnExp4(true);
      setBtnActive4(true);
      setBtnCon4(false);
      setExp3(true);
      setAbout3(true);
      setCard3(true);
      setCon3(false);
    }
  };
  //contact
  const [btnContact1, setBtnCon1] = useState(false);
  const [btnContact2, setBtnCon2] = useState(false);
  const [btnContact3, setBtnCon3] = useState(false);
  const [btnContact4, setBtnCon4] = useState(false);
  const [con, setCon] = useState(false);
  const [con1, setCon1] = useState(false);
  const [con2, setCon2] = useState(false);
  const [con3, setCon3] = useState(false);
  const handelCon = () => {
    if (btnActive1 === true && btnExperience1 == true) {
      setBtnCon1(true);
      setBtnActive1(true);
      setBtnExp1(false);
      setExp(false);
      setAbout(true);
      setCard(true);
      setCon(true);
    } else if (btnActive1 === false && btnExperience1 === false) {
      setBtnCon1(true);
      setBtnActive1(true);
      setBtnExp1(false);
      setExp(false);
      setAbout(true);

      setCard(true);
      setCon(true);
    }
  };
  //card2
  const handelCon1 = () => {
    if (btnActive2 === true && btnExperience2 == true) {
      setBtnCon2(true);
      setBtnActive2(true);
      setBtnExp2(false);
      setExp1(false);
      setAbout1(true);

      setCard1(true);
      setCon1(true);
    } else if (btnActive2 === false && btnExperience2 === false) {
      setBtnCon2(true);
      setBtnActive2(true);
      setBtnExp2(false);
      setExp1(false);
      setAbout1(true);

      setCard1(true);
      setCon1(true);
    }
  };
  //card3
  const handelCon2 = () => {
    if (btnActive3 === true && btnExperience3 == true) {
      setBtnCon3(true);
      setBtnActive3(true);
      setBtnExp3(false);
      setExp2(false);
      setAbout2(true);

      setCard2(true);
      setCon2(true);
    } else if (btnActive3 === false && btnExperience3 === false) {
      setBtnCon3(true);
      setBtnActive3(true);
      setBtnExp3(false);
      setExp2(false);
      setAbout2(true);

      setCard2(true);
      setCon2(true);
    }
  };
  //card4
  const handelCon3 = () => {
    if (btnActive4 === true && btnExperience4 == true) {
      setBtnCon4(true);
      setBtnActive4(true);
      setBtnExp4(false);
      setExp3(false);
      setAbout3(true);

      setCard3(true);
      setCon3(true);
    } else if (btnActive4 === false && btnExperience4 === false) {
      setBtnCon4(true);
      setBtnActive4(true);
      setBtnExp4(false);
      setExp3(false);
      setAbout3(true);

      setCard3(true);
      setCon3(true);
    }
  };

  return (
    <>
      <div className="joinUs-container">
        <div className="Join-card">
          <div
            className={`card ${card ? "is-active" : ""}`}
            data-state="#about"
          >
            <div className="card-header">
              <div className="card-cover"></div>
              <img className="card-avatar" src="./Asraful.jpg" alt="avatar" />
              <h1 className="card-fullname">Asraful</h1>
              <h2 className="card-jobtitle">Web Developer</h2>
            </div>
            <div className="card-main">
              <div
                className={`card-section ${about ? "" : "is-active"} `}
                id="about"
              >
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    Whatever tattooed stumptown art party sriracha gentrify
                    hashtag intelligentsia readymade schlitz brooklyn disrupt.
                  </p>
                </div>
                <div className="card-social">
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                      <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                      <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className={`card-section ${exp ? "is-active" : ""}`}
                id="experience"
              >
                <div className="card-content">
                  <div className="card-subtitle">WORK EXPERIENCE</div>
                  <div className="card-timeline">
                    <div className="card-item" data-year="2018">
                      <div className="card-item-title">
                        Web developer at <span>JotForm</span>
                      </div>
                      <div className="card-item-desc">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                    <div className="card-item" data-year="2020">
                      <div className="card-item-title">
                        UI Developer at <span>GitHub</span>
                      </div>
                      <div className="card-item-desc">
                        Developed new conversion funnels and disrupt.
                      </div>
                    </div>
                    <div className="card-item" data-year="2021">
                      <div className="card-item-title">
                        Illustrator at <span>Google</span>
                      </div>
                      <div className="card-item-desc">
                        Onboarding illustrations for App.
                      </div>
                    </div>
                    <div className="card-item" data-year="2022">
                      <div className="card-item-title">
                        Full-Stack Developer at <span>Facebook</span>
                      </div>
                      <div className="card-item-desc">
                        Responsible for the encomposing brand expreience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`card-section ${con ? "is-active" : ""}`}
                id="contact"
              >
                <div className="card-content">
                  <div className="card-subtitle">CONTACT</div>
                  <div className="card-contact-wrapper">
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Mirput,Dhaka
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      (269) 756-9809
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      shoagasraful4231@gmail.com
                    </div>
                    <button className="contact-me">WORK TOGETHER</button>
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  data-section="#about"
                  className={`${btnActive1 ? "" : "is-active"}`}
                  onClick={handelAbout}
                >
                  About
                </button>
                <button
                  data-section="#experience"
                  className={`${btnExperience1 ? "is-active" : ""}`}
                  onClick={handelExp}
                >
                  Experience
                </button>
                <button
                  data-section="#contact"
                  className={`${btnContact1 ? "is-active" : ""}`}
                  onClick={handelCon}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Join-card">
          <div
            className={`card ${card1 ? "is-active" : ""}`}
            data-state="#about"
          >
            <div className="card-header">
              <div className="card-cover"></div>
              <img className="card-avatar" src="./Resel.jpg" alt="avatar" />
              <h1 className="card-fullname">Rasel Mahamud</h1>
              <h2 className="card-jobtitle">Web Developer</h2>
            </div>
            <div className="card-main">
              <div
                className={`card-section ${about1 ? "" : "is-active"} `}
                id="about"
              >
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    A graphics designer and web developer since 2018
                  </p>
                </div>
                <div className="card-social">
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                      <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                      <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className={`card-section ${exp1 ? "is-active" : ""}`}
                id="experience"
              >
                <div className="card-content">
                  <div className="card-subtitle">WORK EXPERIENCE</div>
                  <div className="card-timeline">
                    <div className="card-item" data-year="2018">
                      <div className="card-item-title">
                        Web developer at <span>JotForm</span>
                      </div>
                      <div className="card-item-desc">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                    <div className="card-item" data-year="2020">
                      <div className="card-item-title">
                        UI Developer at <span>GitHub</span>
                      </div>
                      <div className="card-item-desc">
                        Developed new conversion funnels and disrupt.
                      </div>
                    </div>
                    <div className="card-item" data-year="2021">
                      <div className="card-item-title">
                        Illustrator at <span>Google</span>
                      </div>
                      <div className="card-item-desc">
                        Onboarding illustrations for App.
                      </div>
                    </div>
                    <div className="card-item" data-year="2022">
                      <div className="card-item-title">
                        Full-Stack Developer at <span>LinkedIn</span>
                      </div>
                      <div className="card-item-desc">
                        Responsible for the encomposing brand expreience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`card-section ${con1 ? "is-active" : ""}`}
                id="contact"
              >
                <div className="card-content">
                  <div className="card-subtitle">CONTACT</div>
                  <div className="card-contact-wrapper">
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Mirput,Dhaka
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      (269) 756-9809
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      RaselMahmud@gmail.com
                    </div>
                    <button className="contact-me">WORK TOGETHER</button>
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  data-section="#about"
                  className={`${btnActive2 ? "" : "is-active"}`}
                  onClick={handelAbout1}
                >
                  About
                </button>
                <button
                  data-section="#experience"
                  className={`${btnExperience2 ? "is-active" : ""}`}
                  onClick={handelExp1}
                >
                  Experience
                </button>
                <button
                  data-section="#contact"
                  className={`${btnContact2 ? "is-active" : ""}`}
                  onClick={handelCon1}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Join-card">
          <div
            className={`card ${card2 ? "is-active" : ""}`}
            data-state="#about"
          >
            <div className="card-header">
              <div className="card-cover"></div>
              <img className="card-avatar" src="./masfiq.jpg" alt="avatar" />
              <h1 className="card-fullname">Masfiqur Rahaman</h1>
              <h2 className="card-jobtitle">Web Developer</h2>
            </div>
            <div className="card-main">
              <div
                className={`card-section ${about2 ? "" : "is-active"} `}
                id="about"
              >
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsam, commodi!
                  </p>
                </div>
                <div className="card-social">
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                      <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                      <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className={`card-section ${exp2 ? "is-active" : ""}`}
                id="experience"
              >
                <div className="card-content">
                  <div className="card-subtitle">WORK EXPERIENCE</div>
                  <div className="card-timeline">
                    <div className="card-item" data-year="2018">
                      <div className="card-item-title">
                        Web developer at <span>JotForm</span>
                      </div>
                      <div className="card-item-desc">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                    <div className="card-item" data-year="2020">
                      <div className="card-item-title">
                        UI Developer at <span>GitHub</span>
                      </div>
                      <div className="card-item-desc">
                        Developed new conversion funnels and disrupt.
                      </div>
                    </div>
                    <div className="card-item" data-year="2021">
                      <div className="card-item-title">
                        Illustrator at <span>Google</span>
                      </div>
                      <div className="card-item-desc">
                        Onboarding illustrations for App.
                      </div>
                    </div>
                    <div className="card-item" data-year="2022">
                      <div className="card-item-title">
                        Full-Stack Developer at <span>CodePen</span>
                      </div>
                      <div className="card-item-desc">
                        Responsible for the encomposing brand expreience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`card-section ${con2 ? "is-active" : ""}`}
                id="contact"
              >
                <div className="card-content">
                  <div className="card-subtitle">CONTACT</div>
                  <div className="card-contact-wrapper">
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Mirput,Dhaka
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      (269) 756-9809
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      Masfiq@gmail.com
                    </div>
                    <button className="contact-me">WORK TOGETHER</button>
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  data-section="#about"
                  className={`${btnActive3 ? "" : "is-active"}`}
                  onClick={handelAbout2}
                >
                  About
                </button>
                <button
                  data-section="#experience"
                  className={`${btnExperience3 ? "is-active" : ""}`}
                  onClick={handelExp2}
                >
                  Experience
                </button>
                <button
                  data-section="#contact"
                  className={`${btnContact3 ? "is-active" : ""}`}
                  onClick={handelCon2}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Join-card">
          <div
            className={`card ${card3 ? "is-active" : ""}`}
            data-state="#about"
          >
            <div className="card-header">
              <div className="card-cover"></div>
              <img className="card-avatar" src="./Asif.jpg" alt="avatar" />
              <h1 className="card-fullname">Asif</h1>
              <h2 className="card-jobtitle">Web Developer</h2>
            </div>
            <div className="card-main">
              <div
                className={`card-section ${about3 ? "" : "is-active"} `}
                id="about"
              >
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    Whatever tattooed stumptown art party sriracha gentrify
                    hashtag intelligentsia readymade schlitz brooklyn disrupt.
                  </p>
                </div>
                <div className="card-social">
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                      <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                      <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className={`card-section ${exp3 ? "is-active" : ""}`}
                id="experience"
              >
                <div className="card-content">
                  <div className="card-subtitle">WORK EXPERIENCE</div>
                  <div className="card-timeline">
                    <div className="card-item" data-year="2018">
                      <div className="card-item-title">
                        Web developer at <span>JotForm</span>
                      </div>
                      <div className="card-item-desc">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                    <div className="card-item" data-year="2020">
                      <div className="card-item-title">
                        UI Developer at <span>GitHub</span>
                      </div>
                      <div className="card-item-desc">
                        Developed new conversion funnels and disrupt.
                      </div>
                    </div>
                    <div className="card-item" data-year="2021">
                      <div className="card-item-title">
                        Illustrator at <span>Google</span>
                      </div>
                      <div className="card-item-desc">
                        Onboarding illustrations for App.
                      </div>
                    </div>
                    <div className="card-item" data-year="2022">
                      <div className="card-item-title">
                        Full-Stack Developer at <span>CodePen</span>
                      </div>
                      <div className="card-item-desc">
                        Responsible for the encomposing brand expreience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`card-section ${con3 ? "is-active" : ""}`}
                id="contact"
              >
                <div className="card-content">
                  <div className="card-subtitle">CONTACT</div>
                  <div className="card-contact-wrapper">
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Mirput,Dhaka
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      (269) 756-9809
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      Asif@gmail.com
                    </div>
                    <button className="contact-me">WORK TOGETHER</button>
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  data-section="#about"
                  className={`${btnActive4 ? "" : "is-active"}`}
                  onClick={handelAbout3}
                >
                  About
                </button>
                <button
                  data-section="#experience"
                  className={`${btnExperience4 ? "is-active" : ""}`}
                  onClick={handelExp3}
                >
                  Experience
                </button>
                <button
                  data-section="#contact"
                  className={`${btnContact4 ? "is-active" : ""}`}
                  onClick={handelCon3}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Join;
