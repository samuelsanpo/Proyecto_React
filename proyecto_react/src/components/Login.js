import React, { Component } from 'react';
import style from '../cssmodules/login.css';
import {Input} from 'reactstrap';

class Login extends Component {
    render(){
    return (
        <div  className={style.todo}>
            <form className={style.form}>
                <h1>Inicio de sesión</h1>
                <h2>Bienvenido</h2>
                <div className={style.info}>
                    <label>Email</label>
                    <Input type="email" placeholder="Email"></Input>

                    <label>Contraseña</label>
                    <Input type="password" placeholder="Contraseña"></Input>
                    </div>
                    <div className={style.buttons}>
                    <button className={style.button} >Iniciar sesión</button>
                    <button className={style.button}>Registrarse</button>
                    </div>


            </form>
        </div>
    );
}
}
export default Login;

