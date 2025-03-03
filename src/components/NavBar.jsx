import CartWidget from './CartWidget';

function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">Coffee</a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li><a href="/tazas">Tazas</a></li>
                    <li><a href="/cafeteras">Cafeteras</a></li>
                    <li><a href="/accessorios">Accessorios</a></li>
                </ul>
            </div>
            <div className="cart">
                <CartWidget itemCount={1} />
            </div>
        </nav>
    );
}

export default Navbar;