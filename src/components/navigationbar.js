import React from "react";

const Navbar = ({ scrollToSection }) => {
  return (
    <div className="navbar-container">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
      <nav className="navbar">
        

        <ul className="nav-links">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-gray-400"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("prices")}
              className="hover:text-gray-400"
            >
              Prices
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-400"
            >
              about
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
