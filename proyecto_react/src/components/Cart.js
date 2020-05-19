import React, { Component } from 'react';
import style from '../cssmodules/cart.module.css';
import Menu from './Menu';
import ProductCart from './PruductCart';

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
              <Menu></Menu>
          <div className ={style.todos}>
            <h1>Tu carrito</h1>
            <ProductCart></ProductCart>
             </div>
             <span><button className={style.buttonf} onClick={() => this.compra()}>Realizar Compra</button></span>
              
              </div>
             
        )
      }
    }
    
    export default Login;
    