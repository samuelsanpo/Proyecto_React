import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions/';

import Home from './components/Home'
import LogIn from './containers/LogIn/LogIn';
import SignIn from './containers/SignIn/SignIn';
import NotFound from './containers/NotFound/NotFound';
import Register from './components/Register';
import Cart from './components/Cart'

class App extends Component {

  componentDidMount = () => {
    this.props.onPersistAuthentication();
  }

  render = () => (
    <BrowserRouter>
      <Switch>
        <Route path = '/' component = {Home} exact/>
        <Route path = '/login'  component = {LogIn}/>
        <Route path = '/signin'  component = {SignIn}/>
        <Route path = '/register'  component = {Register}/>
        <Route path = '/cart'  component = {Cart}/>
        
        <Route component = {NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch( actionCreators.persistAuthentication() )
  };
};

export default connect(null, mapDispatchToProps)(App);
