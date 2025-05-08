import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products: [],
    setProduct: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please provide all fields." }
        }

        const response = await fetch('/api/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        const data = await response.json();
        set((state) => ({
            products:[...state.products, data.data]
        }))
        return { success: true, message: "Created Product successfully." }
    },
    fetchProducts: async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        set((state) => ({ products: data.data }))
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) {
            return { success: false, message: data.message }
        }
        set(state => ({ products: state.products.filter(product => product._id !== pid)}))
        return { success: true, message: data.message }
    },
    updateProduct: async (pid, updatedProduct) => {
        const response = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })

        const data = await response.json();

        if (!data.success) {
            return { success: false, message: data.message }
        }
        set((state) => ({
            products: state.products.map((product) => (product._id === pid ? data.data : product)),
        }));
    }
}))