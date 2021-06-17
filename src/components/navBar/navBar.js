import {CartWidget} from '../cartWidget/cartWidget'
import logo from '../navBar/logoOk.PNG'

export const NavBar = () => {
  return (      
    <nav>
      <img src={logo} />
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Capacitaciones</a>
            <ul>
              <li><a href="#">Capacitaciones Premium</a></li>
              <li><a href="#">Capacitaciones Gratuitas</a></li>
            </ul>
        </li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Publicaciones</a></li>
        <li><a href="#">Conectemos</a></li>
      </ul>
      <CartWidget/>
    </nav>
    

  )
}