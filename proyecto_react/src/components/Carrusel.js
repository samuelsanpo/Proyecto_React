import React, { Component } from 'react'
import Articulos from './Articulos'
class Carrusel extends Component {
        
    render(){
    return (
        <React.Fragment>
        <Articulos  titulo="juan" precio="1234"  />
        <Articulos  titulo="juan" precio="1234"  />
        <Articulos  titulo="juan" precio="1234"  />
        <Articulos  titulo="juan" precio="1234"  />        
        </React.Fragment>
    );
    }   
}
export default Carrusel
