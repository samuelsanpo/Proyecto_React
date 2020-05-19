
const redux =require('redux')
const createStore=redux.createStore

const LOGGED='LOGGED'
const ADDBUY='ADDBUY'
function login(){

    return{
        type:LOGGED,
        info:'First redux action'
    }

}
function addBuy(){

    return{
        type:ADDBUY,
        info:'First redux action'
    }

}
const initState={

    isLogged:false,
    carrito:[]

}
const reducer = (state=initState,action)=>{
switch(action.type){

    case LOGGED:return {
        ...state,
        isLogged:!state.isLogged
    }
    case ADDBUY:return {
        ...state,
        carrito:[...state.carrito,1]
    }
    default:return state
}

}
const store=createStore(reducer)
console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(login())
store.dispatch(login())
store.dispatch(login())
store.dispatch(addBuy())
store.dispatch(addBuy())
store.dispatch(addBuy())
store.dispatch(addBuy())
store.dispatch(addBuy())
unsubscribe()