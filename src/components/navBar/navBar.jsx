import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {CartWidget} from '../cartWidget/cartWidget.jsx'
import logo from '../navBar/logoOk.PNG'
import './navBar.scss';


export const NavBar = () => {
  const chevron = <FontAwesomeIcon icon={faChevronDown} />
  const categories = ['Premium', 'Gratuitas', 'Próximas']

  return (    
    <header className="navbar">
      <i className="fa fa-bars bars-button" aria-hidden="true" id="bars-button"></i>
      <div className="contenido">
        <nav className="bars">
          <div className="logoContainer">
            <Link to="/"><img src={logo} alt="logo-ok-tributario"/></Link>
          </div>          
          <ul>
            <Link to="/"><li>Inicio</li></Link>
              <ul className="categories">
                <div className="dropdown">
                  <NavLink to="/">
                    <button className="dropbtn">Capacitaciones {chevron}</button>
                  </NavLink>
                  <div className="dropdown-content">
                    {categories.map((category)=>(
                      <NavLink to={`/category/${category.toLowerCase()}`}>
                        <li className="category">{category}</li>
                      </NavLink>
                    ))}                    
                  </div>
                </div>
              </ul> 
            <NavLink to="/"><li>Nosotros</li></NavLink>
            <NavLink to="/"><li>Publicaciones</li></NavLink>
            <NavLink to="/"><li>Conectémos</li></NavLink>            
          </ul> 
        </nav>
        <Link to="/"><CartWidget/></Link>
      </div>
    </header>
  )
}


