import React,{ Component } from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            Product:'',
            Price:'',
            Description:'',

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
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="Product" 
                        onChange={this.handleInput}
                        value={this.state.Product}
                        className="form-control" 
                        placeholder="Producto"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        name="Price" 
                        className="form-control" 
                        placeholder="Precio"
                        onChange={this.handleInput}
                        value={this.state.Price}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        name="Description" 
                        className="form-control" 
                        placeholder="Descripcion"
                        onChange={this.handleInput}
                        value={this.state.Description}
                        />
                    </div>
                    <button type="submit" className="boton-guardar">
                        Guardar Producto
                    </button>

                                       
                    
                </form>
            </div>
        )
    }


}
export default Formulario;
