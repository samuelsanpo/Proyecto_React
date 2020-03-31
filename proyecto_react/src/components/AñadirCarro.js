import React, { Component } from 'react'

export class AñadirCarro extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos:[]
        }
    }
    componentDidMount(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('./data/Carrito.json', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id })); 
         }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default AñadirCarro

