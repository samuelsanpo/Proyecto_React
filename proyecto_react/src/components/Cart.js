import React, { Component } from 'react';
import style from '../cssmodules/cart.module.css';


class Login extends Component {
        constructor() {
            super();
            this.state = {
                todos: []
            };
        }
    componentDidMount () {
        fetch ('http://localhost:3001/carrito').then(res => res.json()).then(todos => this.setState({todos}))
    }
    

    
    removeProduct(id) {
        fetch (`http://localhost:3001/carrito/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            let categories = this.state.categories.filter(c => c.id !== id);
            this.setState({ categories });
            
          }
        });
      }
     

compra(){
    {this.state.todos.map(todo => (

    fetch (`http://localhost:3001/carrito/${todo.id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())    
        .then(res => {
          if (res.success) {
            let categories = this.state.categories.filter(c => c.id !== todo.id);
            this.setState({ categories });
            
          }
        })
     
    
      ))}  
    alert("Compra exitosa!");
    }
    



   
    render () {
    
        return (
            <div className={style.pagina}>
          <div className ={style.todos}>
            <h1>Tu carrito</h1>
              {this.state.todos.map(todo => (
                              
                <li key={todo.id}>
      
                 <div className={style.card}>
                 <h3>{ todo.tittle }</h3> 
                 <p>Modelo: {todo.modelo}</p>
                 <p>Responsable: {todo.resposible}</p>
                 <p>Precio: {todo.precio}</p>
                 <p>Envio: {todo.envio}</p>
                 <button  className={style.button} onClick={() => this.removeProduct(todo.id)} >Eliminar</button>                         
                 
                 </div>

                </li>
              ))
              
              }

             </div>
             <span><button className={style.buttonf} onClick={() => this.compra()}>Realizar Compra</button></span>
              
              </div>
             
        )
      }
    }
    
    export default Login;
    