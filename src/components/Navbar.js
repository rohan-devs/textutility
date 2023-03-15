import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
             <li className="nav-item">
              <a href="https://github.com/rohanwebuwu/textutility">
                github
              </a>
            </li>
          </ul>
        </div>
        <input
          type="checkbox"
          className="btn-check"
          id="btn-check-outlined"
          autocomplete="off"
          onClick={props.toggleMode}
        />
        <label className="btn btn-outline-primary  " for="btn-check-outlined">
          Enable {props.mode === "light" ? "dark" : "light"} mode
        </label>
        <br />
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "default title",
  about: "agar kuch nhi hua toh ye hoga about",
};
