import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CartWidget } from "../cartWidget/cartWidget.jsx";
import logo from "../../assets/img/logoOk.PNG";
import "./navBar.scss";

export const NavBar = () => {
  const chevron = <FontAwesomeIcon icon={faChevronDown} />;
  const categories = ["Premium", "Gratuitas", "Próximas"];
  const navLinks = ["Nosotros", "Publicaciones", "Conectemos"];

  return (
    <header className="navbar">
      <i
        className="fa fa-bars bars-button"
        aria-hidden="true"
        id="bars-button"
      ></i>
      <div className="contenido">
        <nav className="bars">
          <div className="logoContainer">
            <Link to="/">
              <img src={logo} alt="logo-ok-tributario" />
            </Link>
          </div>
          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <ul className="categories">
              <div className="dropdown">
                <NavLink to="/">
                  <button className="dropbtn">Capacitaciones {chevron}</button>
                </NavLink>
                <div className="dropdown-content">
                  {categories.map((category) => (
                    <NavLink to={`/category/${category.toLowerCase()}`}>
                      <li className="category">{category}</li>
                    </NavLink>
                  ))}
                </div>
              </div>
            </ul>
            {navLinks.map((link) => (
              <NavLink to={`/${link.toLowerCase()}`}>
                <li className="navLinks">{link}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
        <Link to="/">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};
