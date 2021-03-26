import logo from './camera-flash-png.png';
import './App.css';
import React from "react";
import "./Styles.css";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import HOME from "./components/Home";
import PROFILE from "./components/Profile";
import ARTISTIC from "./components/Artistic";
import CONTACT from "./components/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}

function AnimationApp() {
  let location = useLocation();

  return (
    <div className="fill">
      <ul className="nav">
        <NavLink to="/home/red">Home</NavLink>
        <NavLink to="/profile/green">Profile</NavLink>
        <NavLink to="/artistic/blue">Artistic</NavLink>
        <NavLink to="/contact/pink">Contact</NavLink>
      </ul>

      <div className="content">
        <TransitionGroup>
          {/*
          This is no different than other usage of
          <CSSTransition>, just make sure to pass
          `location` to `Switch` so it can match
          the old location as it animates out.
        */}
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              <Route path="/home/:col" children={<HOME />} />
              <Route path="/profile/:col" children={<PROFILE />} />
              <Route path="/artistic/:col" children={<ARTISTIC />} />
              <Route path="/contact/:col" children={<CONTACT />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

function NavLink(props) {
  return (
    <li className="navItem">
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

export default App;