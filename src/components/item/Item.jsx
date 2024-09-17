import React from 'react'

const Item = ({id,nombre,marca,precio,img}) => {
  return (
    <div className='cardProducto'>
        <div><img className='imgCard' src={img} alt={nombre}/></div>
        <h3 style={{textAlign: "center"}}>{nombre}</h3>
        <p style={{textAlign: "center"}}>${precio}</p>
        <button className='boton'>Ver Detalles</button>
    </div>
  )
}

export default Item