import React, { useState } from 'react'
import { useProductStore } from '../store/product.store';
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineCreate } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const ProductDetails = ({ product }) => {
    
    const { deleteProduct, updateProduct } = useProductStore();
    const handleDelete = async (pid) => {

        await deleteProduct(pid)
    }
  
    const [updatedProduct, setUpdatedProduct] = useState(product)
    const [isOpen, setIsOpen] = useState(false)

    const handleUpdate = async () => {

        setIsOpen(true)
    }

    const handleUpdateSubmit = async (pid, updatedProduct) => {
        
        await updateProduct(pid, updatedProduct)
        setIsOpen(false)
    }

    return (
        <>
            <div>
                <div className=' border h-80 hover:scale-105 transition-all duration-300 ease-in-out border-zinc-400 rounded-lg bg-[#1A202C]'>
                    <img src={product.image} className='rounded-t-lg w-full h-40' alt="" />
                    <div className='flex flex-col gap-1 mt-6 font-bold tracking-wider px-4 '>
                        <h4>{product.name}</h4>
                        <h4>${product.price}</h4>
                        <div className='mt-6 gap-4 flex'>
                            <button onClick={handleUpdate}><strong className='cursor-pointer'><MdOutlineCreate size={30}/></strong></button>
                            <button onClick={() => handleDelete(product._id)}><strong className='cursor-pointer'><FaTrashCan size={30} /></strong></button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute top-20 z-50 right-[44rem] flex '>
                    <div className='bg-[#2D3646] h-100 w-130'>
                        
                        <div className='flex flex-col justify-center items-center font-bold gap-4 p-4'>

                            <div className='flex gap-60 mb-4'>
                                <label className='text-cyan-600 text-2xl'>Update Product</label>
                                <label className='text-cyan-600 text-2xl cursor-pointer' onClick={() => setIsOpen(false)} ><IoMdClose size={40} /></label>
                            </div>
                            
                            <input
                            type="text"
                            placeholder='Product Name'
                            value={updatedProduct.name}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            className='border border-zinc-400 rounded-md p-2 w-100'
                            maxLength={18}
                            />
                            
                            <input
                            type="Number"
                            placeholder='Product Price'
                            value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            className='border border-zinc-400 rounded-md p-1 w-100'
                            />

                            <input
                            type="text"
                            placeholder='Product URL'
                            value={updatedProduct.image}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            className='border border-zinc-400 rounded-md p-1 w-100'
                            />

                            <div className='flex gap-2 absolute bottom-10 right-16'>
                                <button onClick={() => handleUpdateSubmit(product._id, updatedProduct)}><span className='border border-cyan-600 hover:bg-cyan-500 bg-cyan-600 rounded-md py-2 px-4 text-zinc-700 cursor-pointer transition-all duration-300 ease-in-out'>Update</span></button>
                                <button onClick={() => setIsOpen(false)}><span className='hover:bg-zinc-400 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out'>Cancel</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductDetails