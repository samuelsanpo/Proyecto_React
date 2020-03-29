import React from 'react'
import style from '../cssmodules/menustyle.module.css'
import Buscador from './Buscador'
import {Link} from 'react-router-dom'



function Menu() {
    return (
        <header className={style.container}>
            <ul>
  <li><Link to="/home">Home</Link></li>  
  <li><Link to="/login">Login</Link></li>
  <li><Link href="contact.asp">Register</Link></li>
  <li><Link href="about.asp">About</Link></li>
  <li><Link href="about.asp">Advanced</Link></li>
  <Buscador/> 
    </ul>
        </header>
    )
}
export default Menu