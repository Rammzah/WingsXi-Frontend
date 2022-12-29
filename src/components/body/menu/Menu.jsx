import React from "react";
import "../../../assets/css/menu.css";

const Menu = () => {
  return (
    <div className="accordion sticky-top" id="accordionMenu">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed menu-text text-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Account Management
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionMenu"
        >
          <div className="accordion-body text-center">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="login"
                >
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="signup"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed menu-text"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Info
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionMenu"
        >
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link link-dark" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="rules"
                >
                  Rules
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="info"
                >
                  Server Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="howto"
                >
                  How to connect
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="faqs"
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="addons"
                >
                  Supported Ashita Addons and Plugins Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed menu-text"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Tools
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionMenu"
        >
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="online"
                >
                  Who's Online
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="mentors"
                >
                  Mentors
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="psearch"
                >
                  Player Search
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="isearch"
                >
                  Item Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed menu-text"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Community
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionMenu"
        >
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="https://discord.gg/wNpVm35wbz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Discord
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="https://gitlab.com/ffxiwings/wings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
