import React, { Component } from 'react';
import { connect } from 'react-redux';
import  styles from './SignIn.css';
import * as actionCreators from '../../store/actions/';

class SignIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
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

    render () {
        return (
            <div className={styles.signform}>
                <h1 >Registrarse</h1>
                <div>
                    <p>Correo:</p>
                    <input type="text"
                    className={styles.input}
                        value={this.state.userName}
                        onChange={(event) => {this.updateSignInInfo(event, 'userName')}}
                    />
                    <p>Contraseña:</p>
                    <input type="password"
                    className={styles.input}
                        value={this.state.password}
                        onChange={(event) => {this.updateSignInInfo(event, 'password')}}
                    /><br/>
                    {this.renderSubmitButton()}
                </div>
            </div>
        );
    }

    renderSubmitButton = () => {
        let content = <button className={styles.signbutton} onClick = {this.submitSignInForm}>Registrarse</button>

        if(this.props.loadingAuth) {
            content = "Cargando"
        }

        return content;
    }

    updateSignInInfo = (event, type) => {
        var updatedLoginInfo = {
          ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
          userName: updatedLoginInfo.userName,
          password: updatedLoginInfo.password
        });
    }

    submitSignInForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password
        };

        this.props.onUserSignIn(userData, () => {
            this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignIn: (authData, onSuccessCallback) => dispatch(actionCreators.signIn(authData, onSuccessCallback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);