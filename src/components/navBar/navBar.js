import {CartWidget} from '../cartWidget/cartWidget'
import logo from '../navBar/logoOk.PNG'
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const chevron = <FontAwesomeIcon icon={faChevronDown} />

export const NavBar = () => {
  return (    
    <div className="navbar">
      <i className="fa fa-bars bars-button" aria-hidden="true" id="bars-button"></i>
      <div className="contenido">
        <nav className="bars">
          <div><img src={logo} alt="logo-ok-tributario"/></div>          
          <ul>
            <li><a href="#">Inicio</a></li>
              <ul>
                <div class="dropdown">
                  <button class="dropbtn">Capacitaciones {chevron}
                  </button>
                  <div class="dropdown-content">
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
    </div>
  )
}


