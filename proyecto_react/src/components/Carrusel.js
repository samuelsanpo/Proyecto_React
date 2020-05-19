import React, { Component } from 'react'
import Articulos from './Articulos'
import style from '../cssmodules/carrusel.module.css'
import {todos} from '../ObjetosVenta'

class Carrusel extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 articulos:todos,                 
                 disp:[3,4,5],
                 disp2:[-3,-2,-1],
                 display:
                 
                 <div className={style.container2}> 
                        <Articulos  idItem={todos[0].id} titulo={todos[0].Product} Model={todos[0].Model}  des={todos[0].Description} Envio={todos[0].Envio} Price={todos[0].Price}/>
                        <Articulos  idItem={todos[1].id}titulo={todos[1].Product} Model={todos[1].Model}  des={todos[1].Description} Envio={todos[1].Envio} Price={todos[1].Price}/>
                        <Articulos  idItem={todos[2].id}titulo={todos[2].Product} Model={todos[2].Model}  des={todos[2].Description} Envio={todos[2].Envio} Price={todos[2].Price}/>
                        
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
            if(producto.id===(this.mod(arrPos[0],tamaño))||producto.id===(this.mod(arrPos[1],tamaño))||producto.id===(this.mod(arrPos[2],tamaño))){
               
            var a=<Articulos key={index} idItem={producto.id} titulo={producto.Product}  Model={producto.Model}  des={producto.Description} Envio={producto.Envio} Price={producto.Price}/>
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
        console.log(this.props.inicial)

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