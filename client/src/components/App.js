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
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
        <Route exact path="/">
        <div className="TopBarHeader">
        <h1>Edgardo Escamilla</h1>
        <div className="moreinfotabs">
        <div>
            <a href="https://www.linkedin.com/in/edgardo-bryan-escamilla/">
              <img className="link"  src="https://i.imgur.com/geNU5mj.png" />
              Linkden
            </a>
          </div>
          <div>
            <a href="https://github.com/EdgardoBryan">
              <img className="link" src="https://i.imgur.com/Ea2sRvO.png"  />
              Github
            </a>
          </div>
          <div>FullStack Developer</div>
        </div>
      </div>
      <div className="ProfileDescription">
        <div className="bostonpicside">
          <h3 className="bio">
            “We have two lives, and the second begins when we realize we only
            have one” – Confucius.
          </h3>
        </div>
        <div className="second-box">
          <img className="profile-pic" src="https://i.imgur.com/umoFTyY.jpg" alt="edpicture"></img>
        </div>
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
            React MultiStep Page built using state to dynamically change pages
            using React Javascript Css and Html{" "}
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
            Full Stack Application with full sign in functionality, able to
            delete edit and create new holidays and with a database to persist
            data
          </h3>
          <a href="https://every-day-is-a-holiday.herokuapp.com/holidays">
            <button className="button6">Code Base</button>
          </a>
        </div>
      </div>
      <h2 className="about">About ME</h2>
      <div className="AboutMe">
      <h3>
        Hello Everyone! I am looking to start a new career in the tech industry.
        I have been in the retail, child education and the fitness industry for
        the past 7 years. My previous job experiences have given me the soft
        skills, organizational abilities, and creativity that lead me to my new
        career path.I am looking forward to developing my skills as a software developer.
      </h3>
      </div>
        </Route>
    </Router>
  );
};

export default hot(App);