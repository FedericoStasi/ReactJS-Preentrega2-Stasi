import  { useEffect, useState } from 'react'
import { getProductos } from '../../../asynmock'
import ListaItem from '../ListaItem/ListaItem'

const ItemListContainer = () => {

  const [productos,setProductos] = useState([])

  useEffect(() =>{
     getProductos()
    .then(respuesta => setProductos(respuesta))
    .catch(error=> console.log(error))
  },[])


  return (
    <>
      <h2 style={{textAlign: "center"}}>Mis Productos</h2>
      <ListaItem productos={productos} />
      </>
    
  )
}

export default ItemListContainer