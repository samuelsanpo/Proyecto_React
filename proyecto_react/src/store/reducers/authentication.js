import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';


const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false,
    error: false,
    articulos: [1,2]
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const signIn = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const logOut = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {
            userName: '',
            idToken: '',
            localId: ''
        }
    });
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingAuth: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingAuth: false });
}

const setError = (state, action) => {
    return updateObject(state, {error: true});
}


const carritoReducer = (state,action) =>{
     return updateObject(state,{} )     
        
       
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_IN: return signIn(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING_AUTH: return startLoading(state, action);
        case actionTypes.END_LOADING_AUTH: return endLoading(state, action);
        case actionTypes.START_ERROR: return setError(state, action);
        case actionTypes.BUY_ITEM: return carritoReducer(state, action);
        default: return state;
    }
}

export default reducer;