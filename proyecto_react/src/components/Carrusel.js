import React, { Component } from 'react'
import ButtonRL from './ButtonRL'

class Carrusel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             slide:1
        }
    }       
            /*<Articulo  titulo={art.tittle} responsable={art.responsible} descripcion={art.descripcion} prioridad={art.priority} />*/       
    
    
    render(){
    return (
     <div>
         <ButtonRL dir="izquierdo"/>
         <ButtonRL dir="derecho"/>
    </div>

    );
    }   
}
export default Carrusel
