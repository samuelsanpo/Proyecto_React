import React,{ Component } from 'react';
import styles from '../cssmodules/registerstyle.module.css'

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            Name:'',
            Password:'',
            Age:'',

        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {value, name}=e.target;
        this.setState({
            [name]:value
        })
        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        
    }

    render(){
        
        return(
            <div className="card">
                <div className="card-header">
                <h1>Registrar Usuario</h1>
                </div>
                <div className={styles.form}>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="Name" 
                        onChange={this.handleInput}
                        value={this.state.Product}
                        className="form-control" 
                        placeholder="Nombre Completo"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        name="Age" 
                        className="form-control" 
                        placeholder="Edad"
                        onChange={this.handleInput}
                        value={this.state.Price}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        name="Password" 
                        className="form-control" 
                        placeholder="Contraseña"
                        onChange={this.handleInput}
                        value={this.state.Description}
                        />
                    </div>
                    <button type="submit" className="boton-guardar">
                        Registrar
                    </button>

                                       
                    
                </form></div>
            </div>
        )
    }


}
export default Formulario;