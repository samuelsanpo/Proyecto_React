import React,{Component} from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './components/Login'

export default class extends Component{   
  
  render(){
    return(
      
        <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Menu}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" />
          <Route path="/carrito" />
          </React.Fragment>
        </BrowserRouter>
        
      
    ); 
  }

}

