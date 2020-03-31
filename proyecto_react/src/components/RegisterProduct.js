import React,{Component} from 'react';
import { todos } from '../ObjetosVenta.json';
import FormularioVenta from './FormularioVenta.js';
import styles from '../cssmodules/registerstyle.module.css'

class RegisterProduct extends Component{
  constructor() {
    super();
    this.state = {
        todos: []
    };
}
componentDidMount () {
fetch ('http://localhost:3001/todos').then(res => res.json()).then(todos => this.setState({todos}))
}



removeTodo(id) {
fetch (`http://localhost:3001/todos/${id}`, {
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
              onClick={() => this.removeTodo(todos.id)}>
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
            <a href=""> 
            Productos
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>          
            </a>

            <div className={styles.container}>
            <FormularioVenta />
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
  