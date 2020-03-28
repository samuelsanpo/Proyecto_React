import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './components/Navegacion';
import { todos } from './ObjetosVenta.json';
import Formulario from './FormularioVenta.js';
import Carrusel from './components/Carrusel.js';
class App extends Component{
  constructor(){
    super();   // Super() para heredar todas las funciones de react
    this.state = {
     todos
  }
  }
  render(){
     const objst = this.state.todos.map((todos,i) => {
      return(
       <div className="col-md-4">
          <div className="card mt-4">
          <div className="card-header">
          <h3>{todos.tittle}</h3>
          <span className="bagde bagde-pill badge-danger ml-2">
          {todos.priority}
          </span>
          </div>
          <div className="card-body">
          <p>{todos.descripcion}</p>
          <p>{todos.resposible}</p>
          </div>
          
        </div>


       </div>
      )
    })
    return(
      
      <div className="App">
        <Navegacion titulo="Gestor de productos"/>
          
             
        <nav>
          <a href="" className="text-white"> 
          Productos
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span>          
          </a>
          <div className="container">
          <Formulario/>
          </div>
            
          </nav>
          <div className="container">
              <div className="row mt-4">
                {objst}
              </div>
              
          </div>
          
            
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item ">
                  <a>Holaaaa</a>
              </div>
              <div className="carousel-item">
              <a>Holaaaa12</a>
              </div>
              <div className="carousel-item"> 
              <a>Holaaaa1221212</a>               
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span> 
            </a>            
                             
          </div> 
                            
        <img src={logo} className="App.logo" alt="logo" />
        
      </div>
          
    );
  }
}

export default App;
