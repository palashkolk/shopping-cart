import {useEffect, useState} from 'react';

import ProductCard from "../components/ProductCard";

function Shop({onAddToCart}){
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=> {
        const fetchData = async ()=>{
            try{

                const response=await fetch('https://fakestoreapi.com/products');
                if(!response.ok) throw new Error("Failed to pull catalogue records");
                const data =await response.json();
                const parsedProduct=await Promise.all(data.slice(0,5));
                setProducts(parsedProduct);
                // const productDetails=data.slice(0,5).map(async (product)=> {return {
                //     id: product.id,
                //     title:product.title,
                //     description:product.description,
                //     price:product.price
                // }});

            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }            
            // console.log(parsedProduct);
        };
        fetchData();
    },[]);

    if (loading) return <div  className="status-msg">Loading marketplace items...</div>;
    if (error) return <div className="status-msg error">Error: {error}</div>;


    return(
        <div className="shop-page">
            <h2>Our Collection</h2>
            <div className="product-grid">{products.map((product)=>(
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}</div>
        </div>
    )
}

export default Shop;