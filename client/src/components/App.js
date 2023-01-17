import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <div className="TopBarHeader">
          <h1>Edgardo Escamilla</h1>
          <div className="moreinfotabs">
            <div>
              <a href="https://www.linkedin.com/in/edgardo-bryan-escamilla/">
                <img className="link" src="https://i.imgur.com/geNU5mj.png" />
                Linkden
              </a>
            </div>
            <div>
              <a href="https://github.com/EdgardoBryan">
                <img className="link" src="https://i.imgur.com/Ea2sRvO.png" />
                Github
              </a>
            </div>
            <div>FullStack Developer</div>
          </div>
        </div>
        <div></div>
        <div className="ProfileDescription">
          <div className="bostonpicside">
            <h3 className="bio">
              “We have two lives, and the second begins when we realize we only have one” –
              Confucius.
            </h3>
          </div>
          <div className="second-box">
            <img
              className="profile-pic"
              src="https://i.imgur.com/umoFTyY.jpg"
              alt="edpicture"
            ></img>
          </div>
        </div>
        <h2 className="about">About ME</h2>
        <div className="AboutMe">
          <h3>
            Welcome! My name is Edgardo Escamilla I am a Fullstack Developer based in Boston. I am
            someone who loves food, mma, basketball,reading and loves to run. I have years of
            experience working as an afterschool teacher, personal trainer and sales. My love for
            new challenges and problem solving has led me to programming! Learning new technologies
            and joining the tech world has really added a new perspective and appreciation for the
            devices we use everyday. I specialize in React and css on the front-end and node
            js,express and postgre sql for the backend.
          </h3>
        </div>
        <div className="languageFrameworks">
          <h2>Languages I specialize In</h2>
          <div className="flexboxLanguages">
            <div className="box box1">
              <h2 className="text">HTML 5</h2>
            </div>
            <div className="box box2">
              <h2>CSS</h2>
            </div>
            <div className="box box3">
              <h2>JAVASCRIPT</h2>
            </div>
            <div className="box box4">
              <h2>REACT JS</h2>
            </div>
            <div className="box box5">
              <h2>NODE JS</h2>
            </div>
          </div>
        </div>
        <h2 className="textProjects">Coding Projects</h2>
        <div className="codingProjects">
          <div className="projectboxes pro1">
            <img src="https://i.imgur.com/BhiFcQr.png" alt="burgerpic" className="Menu"></img>
            <h3>BURGER MENU PAGE BUILT USING HTML AND CSS</h3>
            <a href="https://codepen.io/edgardocodes11/pen/zYRgroK">
              <button className="button1">Code Base</button>
            </a>
          </div>
          <div className="projectboxes pro2">
            <img
              src="https://i.imgur.com/TDZsLfP.png"
              alt="websites"
              className="WebsitesBuilder"
            ></img>
            <h3>FRONT END DESIGN BUILT USING REACT JS HTML AND CSS</h3>
            <a href="https://codesandbox.io/s/do-it-right-page-lhkytg">
              <button className="button2">Code Base</button>
            </a>
          </div>
          <div className="projectboxes pro3">
            <img src="https://i.imgur.com/2LXS77o.png" alt="idCard" className="tupac"></img>
            <h3>MOCK PORTFOLLIO CARD BUILT USING HTML CSS AND FONTAWESOME</h3>
            <a href="https://codepen.io/edgardocodes11/pen/xxWOBKo">
              <button className="button3">Code Base</button>
            </a>
          </div>
          <div className="projectboxes pro4">
            <img
              src="https://i.imgur.com/AGz2yQF.png"
              alt="multiPage"
              className="reactmultistep"
            ></img>
            <h3>
              React MultiStep Page built using state to dynamically change pages using React
              Javascript Css and Html{" "}
            </h3>
            <a href="https://codesandbox.io/s/react-multi-state-page-02rrpp">
              <button className="button4">Code Base</button>
            </a>
          </div>
          <div className="projectboxes pro5">
            <img src="https://i.imgur.com/fLQFF4z.png" alt="instagram" className="instagram"></img>
            <h3>Instagram clone page built with Html and Css</h3>
            <a href="https://codepen.io/edgardocodes11/pen/JjLKNmQ">
              <button className="button5">Code Base</button>
            </a>
          </div>
          <div className="projectboxes pro6">
            <img src="https://i.imgur.com/tyfCGS2.png" alt="holiday" className="holiday"></img>
            <h3>
              Full Stack Application with full sign in functionality, able to delete edit and create
              new holidays and with a database to persist data
            </h3>
            <a href="https://every-day-is-a-holiday.herokuapp.com/holidays">
              <button className="button6">Code Base</button>
            </a>
          </div>
        </div>
        <h2 className="contact-me-text">Contact ME</h2>
        <div className="form-info-parent">
          <div className="contact-details">
            <div className="parent-of-left-contact-form">
              <div className="email-adress-name cl">
                <span className="emailSymbol">&#9993;</span>edgardobryanescamilla@gmail.com
              </div>
                <div className="phone-number cl">
                  <span className="phoneSymbol">&#128222; </span>#617-981-9188
                </div> 
              <div className="location-state cl">
                <span className="locationBoston">&#128204;</span>Boston MA
                </div>
            </div>
          </div>
          <div className="contact-page">
            <form className="contact-form">
              <label className="box-form name">
                Name
                <input type="text" name="name" placeholder="Name" />
              </label>
              <label className="box-form email">
                Email
                <input type="text" name="email" placeholder="Email" />
              </label>
              <label className="box-form message">
                Message
                <textarea placeholder="Message" />
              </label>
              <label>
                <input type="submit" value="Send" />
              </label>
            </form>
          </div>
        </div>
      </Route>
    </Router>
  );
};

export default hot(App);
