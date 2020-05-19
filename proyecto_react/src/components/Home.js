import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '../cssmodules/Home.css';
import Carrusel from './Carrusel';

import * as actionCreators from '../store/actions';
import LogIn from '../containers/LogIn/LogIn'
import Button from './Button/Button';
import Menu from './Menu';
import ProductCard from './ProductCard';

class Home extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        posts: this.props.posts,

    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn
            
        });
    }

    componentDidMount () {
        if (this.state.isUserLoggedIn) {
           // this.props.onFetchPosts();
        }
    }

    componentWillUpdate (nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
           // this.props.onFetchPosts();
        }
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
               <div>
               <p>Logged as: {this.props.userLoggedIn.userName}</p>
               <button onClick={this.props.onLogOut}>Log out</button>
               <div>
                   
               <ProductCard/>
               </div>
                   <Carrusel></Carrusel>
                   <Carrusel></Carrusel>
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
                <image src={"../sport.png"} ></image>
                <div className = "home-page--button-section">
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

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actionCreators.logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);