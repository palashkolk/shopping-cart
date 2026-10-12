import {Link, NavLink} from "react-router-dom";

function Navbar({totalItems}){
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to ="/">Odin Store</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to ="/" className={({isActive})=>(isActive?"active" : "")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/shop" className={({isActive})=>(isActive?"active" : "")}>Shop</NavLink>
                </li>
            </ul>
            <div className="nav-cart">
                <Link to="/cart" className="cart-link">
                    Cart 
                    {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;