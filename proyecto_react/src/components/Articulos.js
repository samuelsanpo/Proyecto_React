import React from 'react'
import style from '../cssmodules/cardstyle.module.css'

export default function Articulos(props) {
    return (
        
            <div className={style.card}>
                <div className={style.containerI}>
                </div>            
                <div className={style.containerD}>
                    <h4>{props.titulo}</h4>
                    <p>{props.precio}</p>
                    <p>Ver en detalle</p>
                </div>
            </div>
        
    )
}
