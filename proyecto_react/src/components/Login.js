import React, { Component } from 'react';
import style from '../cssmodules/login.css';

class Login extends Component {
    render(){
    return (
        <div  className={style.todo}>
            <form className={style.form}>
                <h1>Inicio de sesión</h1>
                <h2>Bienvenido</h2>
               
                    <label>Email</label>
                    <input type="email" placeholder="Email"></input>
                
                    <label>Password</label>
                    <input type="password" placeholder="Password"></input>
                    
                    <button >Iniciar sesión</button>
                    <button >Registrarse</button>
            </form>
        </div>
    );
}
}
export default Login;
