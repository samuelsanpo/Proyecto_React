import React, { Component } from 'react'
import Articulos from './Articulos'
import style from '../cssmodules/carrusel.module.css'
class Carrusel extends Component {
        
    render(){
    return (
        
        <div className={style.container}>
            
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>           
            <div className={style.container2}>
            <Articulos  titulo="juan" precio="1234"  />
            <Articulos  titulo="juan" precio="1234"  />
            <Articulos  titulo="juan" precio="1234"  />
            <Articulos  titulo="juan" precio="1234"  />
            </div>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>

        </div>
        
    );
    }   
}
export default Carrusel
