import React from 'react'
import style from '../cssmodules/cardstyle.module.css'

export default function Articulos(props) {
    return (
        
            <div className={style.card}>            
                <div className={style.container}>
                    <h4>{props.titulo}</h4>
                    <p>{props.responsable}</p>
                    <p>{props.descripcion}</p>
                    <p>{props.prioridad}</p>
                    <p>Ver en detalle</p>
                </div>
            </div>
        
    )
}
