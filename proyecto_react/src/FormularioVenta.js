import React,{ Component } from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            tittle:'',
            responsible:'',
            description:'',
            priority:'low'

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
                        name="tittle" 
                        onChange={this.handleInput}
                        className="form-control" 
                        placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        name="resposible" 
                        className="form-control" 
                        placeholder="Responsible"
                        onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        name="description" 
                        className="form-control" 
                        placeholder="Descripcion"
                        onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select name="priority" 
                        className="form-control"
                        onChange={this.handleInput}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                                       
                    
                </form>
            </div>
        )
    }


}
export default Formulario;
