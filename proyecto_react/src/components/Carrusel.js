import React, { Component } from 'react'
import Articulos from './Articulos'
import style from '../cssmodules/carrusel.module.css'
import {todos} from '../ObjetosVenta'
class Carrusel extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 articulos:todos,                 
                 disp:[4,5,6,7],
                 display:<div className={style.container2}> 
                        <Articulos  titulo={todos[0].tittle} precio={todos[0].precio}/>
                        <Articulos  titulo={todos[1].tittle} precio={todos[1].precio}/>
                        <Articulos  titulo={todos[2].tittle} precio={todos[2].precio}/>
                        <Articulos  titulo={todos[3].tittle} precio={todos[3].precio}/>
                        </div>  
            }
        }
    nextProducts(){
        const tamaño=this.state.articulos.length 
        var arr=this.state.articulos.map((producto,index)=>{
            if(producto.id===(this.state.disp[0])%tamaño||producto.id===(this.state.disp[1])%tamaño||producto.id===(this.state.disp[2])%tamaño||producto.id===(this.state.disp[3])%tamaño){
               
            var a=<Articulos key={index} titulo={producto.tittle} precio={producto.precio}/>
            }
            return a
        })
        this.setState(prevState=>({
            disp: prevState.disp.map((prev)=>(prev+4)),
            display: <div className={style.container2}> {arr}</div>  
        }))
        console.log(this.state.disp)
    }
    render(){
        console.log(this.state.articulos.length)
    return (
        
        <div className={style.container}>
            
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
                   
            {this.state.display}
             
            <a  onClick={()=>this.nextProducts()}className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>

        </div>
        
    );
    }   
}
export default Carrusel
