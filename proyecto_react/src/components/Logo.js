import React, { Component } from 'react'
import logo from '../logo.svg';
import styles from '../cssmodules/logostyle.module.css';
class Logo extends Component {
    render() {
       
        return (
            <div className={styles.logoreal}>
               <img src={logo} alt="logoReal"  /> 
            </div>
        )
    }
}

export default Logo
