import {useState} from "react";

function ProductCard({product, onAddToCart}) {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement=() => setQuantity((prev)=> prev+1);
    const handleDecrement=() => setQuantity((prev)=> (prev>1?prev-1:1));
    const handleInputChange =(e)=> {
        const val=parseInt(e.target.value, 10);
        setQuantity(isNaN(val)||val<1?1:val);
    }

    return (
        <div className="product-card">
            <div className="img-wrapper">
                <img src="{product.image}" alt="{product.title}" />
            </div>
            <h3>{product.title}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <div>
                <button onClick={handleDecrement} aria-label="Decrease quantity">-</button>
                <input type="number" value={quantity} onChange={handleInputChange} min="1" aria-label="Quantity-input"/>
                <button onClick={handleIncrement} aria-label="Increase quantity">+</button>
                <button className="add-btn" onClick={() => onAddToCart(product, quantity)}></button>
            </div>
        </div>
    );

}

export default ProductCard;