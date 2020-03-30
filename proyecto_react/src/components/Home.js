import React from 'react'
import Carrusel from './Carrusel'
function Home() {
    const heading={position:'absolute',bottom:'50%'}
    return (
        <div >
                <Carrusel></Carrusel>
                <Carrusel></Carrusel> 
                <Carrusel></Carrusel>       
                     
        </div>
    )
}

export default Home
