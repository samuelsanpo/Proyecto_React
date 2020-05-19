import * as actionTypes from './actionTypes';
import {BUY_ITEM} from './actionTypes';
import axios from '../../instances/axios-authentication';

const API_KEY = 'AIzaSyBt3YCBg5rzi_SB_5HcjnUaNTMINHQV1PQ';


const startAuthLoading = () => {
    return {
        type: actionTypes.START_LOADING_AUTH
    }
}

const endAuthLoading = () => {
    return {
        type: actionTypes.END_LOADING_AUTH
    }
}

const startError = () => {
    return {
        type: actionTypes.START_ERROR
    }
}

const saveSession = (userName, token, localId) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};

const saveSignIn = (userName, token, localId) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};

export const logIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startAuthLoading())
        axios.post('/accounts:signInWithPassword?key='+API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;
                let userSession = {
                    token,
                    userEmail,
                    localId
                };

                userSession = JSON.stringify(userSession);

                console.log(response);

                localStorage.setItem('userSession', userSession);

                dispatch(saveSession(userEmail, token, localId));
                dispatch(endAuthLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {
                console.log(error);
                dispatch(startError());
                dispatch(endAuthLoading());
            })
    }
};

export const signIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startAuthLoading())
        axios.post('/accounts:signUp?key='+API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;
                let userSession = {
                    token,
                    userEmail,
                    localId
                };

                userSession = JSON.stringify(userSession);

                console.log(response);

                localStorage.setItem('userSession', userSession);

                dispatch(saveSignIn(userEmail, token, localId));
                dispatch(endAuthLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {
                console.log(error);

                dispatch(endAuthLoading());
            })
    }
};

export const persistAuthentication = () => {
    return dispatch => {
        let userSession = localStorage.getItem('userSession');

        if(!userSession) {
            dispatch(logOut());
        } else {
            userSession = JSON.parse(userSession);

            dispatch(saveSignIn(userSession.userEmail, userSession.token, userSession.localId));
        }
    }
}

export const logOut = () => {
    localStorage.removeItem('userSession');

    return {
        type: actionTypes.LOG_OUT
    };
};


export const buyItem= (number=1) =>{
    return{
        type:BUY_ITEM,
        payload:number

    }
}