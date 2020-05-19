import React, { Component } from 'react';
import { connect } from 'react-redux';
import  styles from './LogIn.css';

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

class LogIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: '',
        error: this.props.error
    }

    componentDidUpdate () {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn
        });
    }

    testerror(errors){
        if(errors==true){
            alert("Inicio de sesión incorrecto, usuario o contraseña errados")
            
        }

    }

    render () {
        var errors = this.props.error;
        return (

            <div className={styles.loginform}>
                <h1 style = {{textAlign: 'center'}}>Iniciar sesión</h1>
                <div>
                    <p>Correo:</p>
                    <input type="text"
                    className={styles.input}
                        value={this.state.userName}
                        onChange={(event) => {this.updateLoginInfo(event, 'userName')}}
                    />
                    <p>Contraseña:</p>
                    <input type="password"
                    className={styles.input}
                        value={this.state.password}
                        onChange={(event) => {this.updateLoginInfo(event, 'password')}}
                    /><br/>
                    {this.renderSubmitButton()}
                </div>
            </div>
        );
    }

    renderSubmitButton = () => {
        let content = <button  className={styles.loginbutton} onClick = {this.submitLoginForm}>Iniciar sesión</button>;
        
        if(this.props.loadingAuth) {
            content = <Spinner />
        }

        return content;
        

    }

    updateLoginInfo = (event, type) => {
        var updatedLoginInfo = {
          ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
          userName: updatedLoginInfo.userName,
          password: updatedLoginInfo.password
        });
    }

    submitLoginForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password
        };

        this.props.onUserLogin(userData, () => {
            this.props.history.push('/');
        });
        var errors = this.props.error;
        this.testerror(errors);

    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        error: state.authenticationStore.error

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);