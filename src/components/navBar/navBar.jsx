import React from 'react';
import {CartWidget} from '../cartWidget/cartWidget.jsx'
import logo from '../navBar/logoOk.PNG'
import './navBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
  const chevron = <FontAwesomeIcon icon={faChevronDown} />
  return (    
    <header className="navbar">
      <i className="fa fa-bars bars-button" aria-hidden="true" id="bars-button"></i>
      <div className="contenido">
        <nav className="bars">
          <div><img src={logo} alt="logo-ok-tributario"/></div>          
          <ul>
            <li><a href="#">Inicio</a></li>
              <ul>
                <div className="dropdown">
                  <button className="dropbtn">Capacitaciones {chevron}
                  </button>
                  <div className="dropdown-content">
                    <li><a href="#">Capacitaciones Premium</a></li>
                    <li><a href="#">Capacitaciones Gratuitas</a></li>
                  </div>
                </div>
              </ul> 
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Publicaciones</a></li>
            <li><a href="#">Conectémos</a></li>            
          </ul> 
        </nav>
        <a href="#"><CartWidget/></a>
      </div>
    </header>
  )
}


