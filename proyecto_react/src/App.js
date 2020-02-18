import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './components/Navegacion';
import { todos } from './ObjetosVenta.json';
import Formulario from './FormularioVenta.js';

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
                               
        <img src={logo} className="App.logo" alt="logo" />
        
      </div>
          
    );
  }
}

export default App;
