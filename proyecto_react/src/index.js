import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import authenticationReducer from './store/reducers/authentication';


const rootReducer = combineReducers ({
    authenticationStore: authenticationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
