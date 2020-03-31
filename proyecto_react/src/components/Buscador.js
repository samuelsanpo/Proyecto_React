import React from 'react'
import style from '../cssmodules/buscadorstyle.module.css'
export default function Buscador() {
    return (

        <div >
            <form >
                <input className={style.input} type="text" placeholder="Search.." name="search"/>
                <button className={style.button} type="submit">GO</button>

            </form>
        </div>
    )
}
