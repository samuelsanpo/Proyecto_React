import React from 'react'
import style from '../cssmodules/menustyle.module.css'
import {Link} from 'react-router-dom'

function Menu() {
    
    return (
        <React.Fragment>
        <header className={style.container}>
            <ul>
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/login">Logiiiiin</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/cart">Carrito</Link></li>
            </ul>

        </header>
        
        </React.Fragment>
    )
}
export default Menu