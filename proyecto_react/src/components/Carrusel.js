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
                 disp2:[-4,-3,-2,-1],
                 display:<div className={style.container2}> 
                        <Articulos  titulo={todos[0].tittle} modelo={todos[0].modelo} responsable={todos[0].resposible} des={todos[0].descripcion} envio={todos[0].envio} precio={todos[0].precio}/>
                        <Articulos  titulo={todos[1].tittle} modelo={todos[1].modelo} responsable={todos[1].resposible} des={todos[1].descripcion} envio={todos[1].envio} precio={todos[1].precio}/>
                        <Articulos  titulo={todos[2].tittle} modelo={todos[2].modelo} responsable={todos[2].resposible} des={todos[2].descripcion} envio={todos[2].envio} precio={todos[2].precio}/>
                        <Articulos  titulo={todos[3].tittle} modelo={todos[3].modelo} responsable={todos[3].resposible} des={todos[3].descripcion} envio={todos[3].envio} precio={todos[3].precio}/>
                        </div>  
            }
        }
    displayProducts(dir){        
        var arrPos=this.state.disp
        if(dir==="atras"){
           arrPos=this.state.disp2
        }
        var tamaño=this.state.articulos.length 
        var arr=this.state.articulos.map((producto,index)=>{
            if(producto.id===(this.mod(arrPos[0],tamaño))||producto.id===(this.mod(arrPos[1],tamaño))||producto.id===(this.mod(arrPos[2],tamaño))||producto.id===(this.mod(arrPos[3],tamaño))){
               
            var a=<Articulos key={index} titulo={producto.tittle}  modelo={producto.modelo} responsable={producto.resposible} des={producto.descripcion} envio={producto.envio} precio={producto.precio}/>
            }
            return a
        })
        this.setState({
            display: <div className={style.container2}> {arr}</div> 
        })
        if(dir==="atras"){
            this.setState(prevState=>({
                disp: prevState.disp.map((prev)=>(prev-4)),
                disp2: prevState.disp2.map((prev)=>(prev-4))
            })                               
            )

        }else{
            this.setState(prevState=>({
                disp: prevState.disp.map((prev)=>(prev+4)),
                disp2: prevState.disp2.map((prev)=>(prev+4))

            })                               
            )

        }
        
    }
        mod(n, m) {
            var a=((n % m) + m) % m            
        return a;
        }
            
    render(){
        
    return (
        
        <div className={style.container}>
            
            <a onClick={()=>this.displayProducts("atras")} className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
                   
            {this.state.display}
             
            <a  onClick={()=>this.displayProducts("adelante")}className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>

        </div>
        
    );
    }   
}
export default Carrusel
