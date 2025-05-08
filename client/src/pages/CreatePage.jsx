import React, { useState } from 'react'
import { useProductStore } from '../store/product.store.js'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
  

    const { createProduct } = useProductStore()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { success, message } = await createProduct(newProduct);
        console.log(`Success:`, success);
        console.log(`Message:`, message);

        setNewProduct({
            name: "",
            price: "",
            image: ""
        })
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='flex justify-center gap-4 w-120 flex-col items-center'>
                <h1 className='text-white font-bold text-4xl'>Create New Prouduct</h1>

                <form className='text-zinc-400 flex flex-col gap-4'>

                    <input 
                    type="text"
                    placeholder='Product Name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className='w-90 p-2 border border-zinc-400 rounded-md'
                    />

                    <input 
                    type="Number"
                    placeholder='Product Price'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className='w-90 p-2 border border-zinc-400 rounded-md'
                    />

                    <input 
                    type="text"
                    placeholder='Product URL'
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    className='w-90 p-2 border border-zinc-400 rounded-md'
                    />
    
                    <button onClick={handleSubmit} className='text-zinc-800 font-bold p-1 border border-cyan-600 rounded-sm bg-cyan-600 cursor-pointer'>Add Product</button>

                </form>
            </div>
        </div>
    )
}

export default CreatePage;