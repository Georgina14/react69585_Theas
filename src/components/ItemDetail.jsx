import ItemCount from "./ItemCount"

function ItemDetail({ detail }) {
    return (
        <div>
            <img src={`/images/${detail.imagen}`} alt={detail.nombre} />
            <h1>{detail.nombre}</h1>
            <p>{detail.descripcion}</p>
            <p><strong>Precio:</strong> {detail.precio}</p>
            <p><strong>Stock:</strong> {detail.stock}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail