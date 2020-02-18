import React,{ Component } from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            Product:'',
            Price:'',
            Description:'',

        };
        this.handleInput=this.handleInput.bind(this);
    }
    handleInput(e){
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
        console.log(this.state);
    }
    render(){
        
        return(
            <div className="card">
                <form className="card-body">
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="Product" 
                        onChange={this.handleInput}
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
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        name="Description" 
                        className="form-control" 
                        placeholder="Descripcion"
                        onChange={this.handleInput}
                        />
                    </div>

                                       
                    
                </form>
            </div>
        )
    }


}
export default Formulario;
