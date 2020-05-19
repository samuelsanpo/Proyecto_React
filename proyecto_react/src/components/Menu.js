import React from 'react'
import style from '../cssmodules/menustyle.module.css'
import Buscador from './Buscador'
import {Link} from 'react-router-dom'

function Menu() {

    return (
        <React.Fragment>
        <header className={style.container}>
            <ul>
  <li><Link to="/">Inicio</Link></li>  
  <li><Link to="/register">Administrar productos</Link></li>
  <li><Link to="/cart">Carrito</Link></li>



    </ul>

        </header>
        
        </React.Fragment>
    )
}
export default Menu