import React, { Component } from 'react';
import style from '../cssmodules/menustyle.module.css'
import Buscador from './Buscador'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';

class Menu extends Component {
render(){
    return (
        <React.Fragment>
        <header className={style.container}>
            <ul>
  <li><Link to="/">Inicio</Link></li>  
  <li><Link to="/register">Administrar productos</Link></li>
  <li><Link to="/cart">Carrito</Link></li>
  <p>Sesión iniciada como: {this.props.userLoggedIn.userName}</p>
                <p>{this.props.articulos}</p>
               <button onClick={this.props.onLogOut}>Cerrar sesión</button>

  </ul>
  </header>
        </React.Fragment>

    )
}
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        articulos: state.authenticationStore.articulos

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actionCreators.logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);