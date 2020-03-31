import React,{Component} from 'react';
import './App.css';
import Menu from './components/Menu';
import Artculos from './components/Articulos';
import Home from './components/Home'
import { render } from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register';
import Cart from './components/Cart'



export default class extends Component{   
  
  render(){
    return(
      
        <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Menu}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/cart" component={Cart}/>

          </React.Fragment>
        </BrowserRouter>
        
      
    ); 
  }

}

