import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import shop from "../../Assets/shop.png";
import notify from "../../Assets/Vector.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">
            FashionHub
          </Link>
        </div>

        <div className={`navbar-nav ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <Link to="/add/product" className="nav-item">
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/add/category" className="nav-item">
                Add Category
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-item">
                Products
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-item">
                Brand
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-icons">
          <Link to="/cart" className="navbar-icon">
            <span className="notifications">
              <img src={shop} alt="" />
            </span>
          </Link>
          <Link to="/cart" className="navbar-icon">
            <span className="notifications">
              <img src={notify} alt="" />
            </span>
          </Link>
          <Link to="/notifications" className="navbar-icon">
            <span className="profilepic">J</span>
          </Link>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
