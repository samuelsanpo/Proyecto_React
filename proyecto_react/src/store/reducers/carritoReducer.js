import {BUY_ITEM} from  '../actions/actionTypes';
const initialState={
    articulos:[1,2,3,4,5]
}
function carritoReducer(state=initialState,action){
    switch(action.type){
        case BUY_ITEM: return{
            ...state,articulos:[...state.articulos,action.payload]
        }
        default:return state
    }
}
export default carritoReducer