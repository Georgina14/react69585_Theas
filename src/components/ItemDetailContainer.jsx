import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { productos } from "../data/products";

export default function ItemDetailContainer () {
    const [detail, setDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const product = productos.find(item => item.id === parseInt(id));

        if (product) {
            setDetail(product);
        }
    }, [id])

    if (!detail) {
        return <div>Loading...</div>}


    return (
        <div>
            <img src={`/images/${detail.imagen}`} alt={detail.nombre} />
            <h1>{detail.nombre}</h1>
            <p>{detail.descripcion}</p>
            <p><strong>Precio:</strong> {detail.precio}</p>
            <p><strong>Stock:</strong> {detail.stock}</p>
            <button>Agregar al Carrito</button>
        </div>
    );
}