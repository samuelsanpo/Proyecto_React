import React,{Component} from 'react';
import { users } from '../Usuarios.json';
import FormularioUser from './FormularioUser.js';
import styles from '../cssmodules/registerstyle.module.css'

class RegisterProduct extends Component{
    constructor(){
      super();   // Super() para heredar todas las funciones de react
      this.state = {
       users
    };
    this.handdleAddTodo = this.handdleAddTodo.bind(this);
    }
  
  handdleAddTodo(todo){
  
    this.setState({
      users: [...this.state.users, todo]
    })
  }
  
  removeTodo(index){
    if(window.confirm('Estas seguro que deseas eliminar esto?')){
      this.setState({
        users: this.state.users.filter((e, i) => {
            return i !== index
        })
      })
    }
  }

    render(){
       const objst = this.state.users.map((users,i) => {
        return(
         <div className="col-md-4">
            <div className="card mt-4">
            <div className="card-header">
            <h3>{users.Name}</h3>
            <span className="bagde bagde-pill badge-danger ml-2">
            </span>
            </div>
            <div className="card-body">
            <p>{users.Age}</p>
            <p>{users.Password}</p>
            </div>
            <div className={styles.footer}>
              <button className={styles.boton}
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
            Usuarios
            <span className="badge badge-pill badge-light ml-2">
              {this.state.users.length}
            </span>          
            </a>

            <div className={styles.container}>
            <FormularioUser onAddTodo={this.handdleAddTodo}/>
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
  