import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import RegisterProductForm from './RegisterProductForm.js';
import styles from '../cssmodules/registerstyle.module.css'
import Container from 'react-bootstrap/Container'
import ProductCard from './ProductCard';

function useProduct() {
  const [products, setProducts] = useState([])
    //unsuscribe para no tener una tener uso innecesario al no estar en la pestaña.
  useEffect (()=>{
    const unsuscribe = firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        const newProduct = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

      setProducts(newProduct)
      })

      return() => unsuscribe()
  }, [])

  return products 
}

const RegisterProduct = () => {

  const products = useProduct()
      
      return(
       
        <div className="App">        
        
            <div className={styles.container}>
            <RegisterProductForm />
            </div>

            <div>
            <ProductCard/>
            </div>
            
        </div>
            
      )
    }
  
  export default RegisterProduct
  