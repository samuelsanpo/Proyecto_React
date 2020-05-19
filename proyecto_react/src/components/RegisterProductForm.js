import React, { useState } from 'react'
import firebase from '../firebase'

const AddProductForm = () =>{
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    function onSubmit(e) {

        e.preventDefault()

        firebase
            .firestore()
            .collection('products')
            .add({
                product,
                description,
                price
            })
            .then(() => {
                setProduct('')
                setDescription('')
                setPrice('')
            })
    }



    return(
        <div className="card">
            <div className="card-header">
            <h1 >Agregar productos</h1>
            </div>
            <form className="card-body" onSubmit={onSubmit} >
                <div className="form-group">
                    <input 
                    type="text" 
                    name="Product" 
                    onChange={e => setProduct(e.currentTarget.value)}
                    value={product}
                    className="form-control" 
                    placeholder="Producto"
                    />
                </div>
                <div className="form-group">
                    <input type="text" 
                    name="Price" 
                    className="form-control" 
                    placeholder="Precio"
                    onChange={e => setPrice(e.currentTarget.value)}
                    value={price}
                    />
                </div>
                <div className="form-group">
                    <input type="text" 
                    name="Description" 
                    className="form-control" 
                    placeholder="Descripcion"
                    onChange={e => setDescription(e.currentTarget.value)}
                    value={description}
                    />
                </div>
                <button>Guardar Producto</button>
            
            </form>
        </div>
    )

} 

export default AddProductForm