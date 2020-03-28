import React from 'react'
import style from '../cssmodules/buscadorstyle.module.css'
export default function Buscador() {
    return (
        <div className={style}>
            <form >
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit">GO</button>
            </form>
        </div>
    )
}
