import React from 'react'
import style from '../cssmodules/cardstyle.module.css'
import {Link} from 'react-router-dom'
export default function Articulos(props) {
    return (
        
            <div className={style.card}>
                <div className={style.containerI}>
                </div>            
                <div className={style.containerD}>
                    <h4>{props.titulo}</h4>
                    <p>{props.precio}</p>
                    <Link>Ver en detalle</Link>
                </div>
            </div>
        
    )
}
