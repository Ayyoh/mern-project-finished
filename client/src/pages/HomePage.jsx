import React, { useEffect } from 'react'
import { useProductStore } from '../store/product.store';
import ProductDetails from '../components/ProductDetails';

const HomePage = () => {
  
    const { fetchProducts, products } = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    console.log(products);

    return (
        <div>
            <div className='text-white flex flex-col xl:grid xl:grid-cols-5 gap-4'>
                {products.map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default HomePage;