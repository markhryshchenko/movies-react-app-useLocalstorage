import React from "react";
import "../styles/header.css";
import { Login, Logout, Person2 } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Header() {
  //============------------Links!==========-----------
  return (
    <header>
      <div className="nav-bar">
        <div className="logo">LoremFilms</div>

        <ul className="nav">
          <Link className="nav__link" to="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/">
            <li>Films</li>
          </Link>

          <Link className="nav__link" to="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/">
            <li>Prices</li>
          </Link>
          <Link className="nav__link" to="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/">
            <li>About</li>
          </Link>
        </ul>
        <div className="login-field">
          <Link className="login-field__link" to="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/login">
            <div className="login">
              <Login fontSize="small" />
            </div>
          </Link>
          <Link className="hidden-btn  login-field__link" to="/">
            <div className="logout" fontSize="small">
              <Logout />
            </div>
          </Link>
          <Link className="login-field__link" to="https://markhryshchenko.github.io/movies-react-app-useLocalstorage/registr">
            <div className="signup" fontSize="small">
              <Person2 />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
