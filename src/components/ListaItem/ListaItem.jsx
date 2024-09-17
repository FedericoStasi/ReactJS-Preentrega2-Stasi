import Item from "../item/item"


const ListaItem = ({productos}) => {
  return (
    <div className="productosContainer">
        {productos.map(item =><Item{...item}/>)}
    </div>
  )
}

export default ListaItem