import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { productos } from "../data/products";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
    const { id } = useParams()
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        const product = productos.find((prod) => prod.id === parseInt(id));
    setDetail(product);
  }, [id]);

    if (!detail) {
        return <div>Loading...</div>}


    return (
        <div className="container mt-4">
      <ItemDetail detail={detail} />
    </div>
    )
}