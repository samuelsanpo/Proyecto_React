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


    AñadirProducto(Product,Price, Description) {
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Product: Product,
            Price: Price, Description: Description })
        };
        fetch('http://localhost:3001/todos', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
            alert("Prudcto añadido correctamente")
      }
      






    render(){
        
        return(
            <div className="card">
                <div className="card-header">
                <h1 >Agregar productos</h1>
                </div>
                <form className="card-body" >
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
                    <button onClick={() => this.AñadirProducto(this.state.Product, this.state.Price, this.state.Description)} className="boton-guardar"> 
                        Guardar Producto
                    </button>

                                       
                    
                </form>
            </div>
        )
    }


}
export default Formulario;
