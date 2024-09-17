import React from 'react'
import CartWidget from '../CartWidget/CartWidget'


const Barra = () => {
  return (
    <header  className="nav">
        <h1 className="title">Muisc Man</h1>

        <ul className="lista-nav">
            <li className="item-nav">Guitarras</li>
            <li className="item-nav">Amplificadores</li>
            <li className="item-nav">Audio</li>
        </ul>
    
        <CartWidget/>
    </header>
  )
}

export default Barra