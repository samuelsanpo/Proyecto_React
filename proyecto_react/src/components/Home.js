import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '../cssmodules/Home.css';
import Carrusel from './Carrusel';
import ProductCardforSell from './ProductCardforSell';
import sport from '../sport2.svg';
import * as actionCreators from '../store/actions';
import LogIn from '../containers/LogIn/LogIn'
import Button from './Button/Button';
import Menu from './Menu';
import firebase from '../firebase';


class Home extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,

    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn
            
        });
    }

    render () {
        return (
            this.state.isUserLoggedIn ? this.onUserLoggedIn() : this.onUserLoggedOut()
        );
    }

    onUserLoggedIn () {
        return (
            
            <div>
                <Menu></Menu>
               <div >
               <h1>React Sports</h1>
               <h2>Bienvenido, encontrarás los mejores productos deportivos.</h2>
               <div className={style.cont}>
               <img src={sport} /></div>
               <br></br>
                <div>
                <ProductCardforSell/>
                </div>
                   <Carrusel></Carrusel>

               </div>
            </div>
        );
    }

   
    onUserLoggedOut () {
        return (
            <div  className={style.inicio}>
                <h1>Bienvenido a React Sports</h1>
                <h2>Si ya tienes una cuenta por favor accede</h2>
                <h2>Si no, por favor registrate</h2>
                <div className = "home-page--button-section">
                <div className={style.conti}>
               <img src={sport} /></div>
                    <Button   label="Iniciar sesión" linkTo='./login' type='primary'></Button>
                    <Button  label="Registrarse" linkTo='./signin' type='secondary'></Button>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);