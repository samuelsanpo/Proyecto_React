import {BUY_ITEM} from './carritoTypes'
export const buyItem= (number=1) =>{
    return{
        type:BUY_ITEM,
        payload:number

    }
}