import { useState } from "react"

function ItemCount ({ stock }) {
    const [count, setCount] = useState (0)
    const [added, setAdded] = useState(false)

    const handleSub = () => {
        if (count > 0) {
            setCount(count - 1)
        }    
    };

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };

const handleAddToCart = () => {
    if (count > 0) {
        setAdded(true)
    }
};


    return (
        <div>
            <p>{count}</p>
            <button onClick={handleSub} disabled={count === 0}>-</button>
            <button onClick={handleAdd} disabled={count === stock}>+</button>
            <button onClick={handleAddToCart}>Agregar al Carrito</button>
            {added && <p>Agregado!</p>}
        </div>
    );
}


export default ItemCount