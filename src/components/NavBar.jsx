import CartWidget from './CartWidget'
import { useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown } from "react-bootstrap"; 
import { productos } from "../data/products";
import { NavLink } from "react-router";

function NavBar () {
    const [categorias, setCategorias] = useState ([])

    useEffect(() => {
        const getCategories = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const categoriasUnicas = [...new Set(productos.map(item => item.categoria))];
                    resolve(categoriasUnicas);
                }, 500);
            });
        };

        getCategories().then(setCategorias);
    }, []);

    return (
        <Navbar bg="dark" expand="lg" data-bs-theme="dark">
                <Navbar.Brand 
                    to="/"
                    as={NavLink}
                >
                    CoffeStore
                </Navbar.Brand>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categorias
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {categorias.map(cat => (
                        <Dropdown.Item 
                            to={`/category/${cat}`}
                            key={cat} 
                            as={NavLink}
                        >
                            {cat}
                        </Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>
            <CartWidget />
        </Navbar>
    );
}

export default NavBar;