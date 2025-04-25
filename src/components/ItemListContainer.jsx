import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig" 
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";
import { useParams } from "react-router";


const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("");
    const { id } = useParams()
    
    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id || selectedCategory) {
                    const filteredItems = productos.filter((item) =>
                        (item.categoria === id || item.categoria === selectedCategory)
                    );
                    resolve(filteredItems);
                } else {
                    resolve(productos);
                }
                resolve(productos)
            }, 2000)
        })
    }

    useEffect(() => {
        getItems()
            .then(res => setItems(res))
            }, [id, selectedCategory]);
        

    return (
        <>
            <ItemListWithLoading items={items} />
        </>

    )
}

export default ItemListContainer