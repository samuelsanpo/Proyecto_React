import React,{Component} from 'react';
import { todos } from '../ObjetosVenta.json';
import FormularioVenta from './FormularioVenta.js';
import styles from '../cssmodules/registerstyle.module.css'

class RegisterProduct extends Component{
    constructor(){
      super();   // Super() para heredar todas las funciones de react
      this.state = {
       todos
    };
    this.handdleAddTodo = this.handdleAddTodo.bind(this);
    }
  
  handdleAddTodo(todo){
  
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  
  removeTodo(index){
    if(window.confirm('Estas seguro que deseas eliminar esto?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
            return i !== index
        })
      })
    }
  }

    render(){
       const objst = this.state.todos.map((todos,i) => {
        return(
         <div className="col-md-4">
            <div className="card mt-4">
            <div className="card-header">
            <h3>{todos.Product}</h3>
            <span className="bagde bagde-pill badge-danger ml-2">
            {todos.priority}
            </span>
            </div>
            <div className="card-body">
            <p>{todos.Price}</p>
            <p>{todos.Description}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn danger"
              onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
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

            <div className={styles.container}>
            <FormularioVenta onAddTodo={this.handdleAddTodo}/>
            </div>

            
              
            </nav>
            <div className="container">
                <div className="row mt-4">
                  {objst}
                </div>
            </div>
          
        </div>
            
      );}
    
  }
  
  export default RegisterProduct;
  