import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { productos } from "../data/products";
import ItemDetail from "./ItemDetail";

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
        <ItemDetail detail={detail} />
    )
}