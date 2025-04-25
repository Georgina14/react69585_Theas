import ItemCount from "./ItemCount"

function ItemDetail({ detail }) {
    if (!detail) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <img src={detail.imagen} alt={detail.nombre} />
            <h1>{detail.nombre}</h1>
            <p>{detail.descripcion}</p>
            <p><strong>Precio:</strong> {detail.precio}</p>
            <p><strong>Stock:</strong> {detail.stock}</p>
            <ItemCount stock={detail.stock} />
        </div>
    )
}

export default ItemDetail