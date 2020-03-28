import React from 'react'
import style from '../cssmodules/menustyle.module.css'
import Buscador from './Buscador'



function Menu() {
    return (
        <div className={style.container}>
            <ul>
  <li><a href="news.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Login</a></li>
  <li><a href="contact.asp">Register</a></li>
  <li><a href="about.asp">About</a></li>
  <li><a href="about.asp">Advanced</a></li>
  <Buscador/> 
    </ul>
        </div>
    )
}
export default Menu