import React, { useState } from 'react'
import useProducts from '../Hooks/useProducts'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const Products = () => {
    const { products, loading, error } = useProducts()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase();

    const searchProduct = term ? products.filter(product => product.name.toLocaleLowerCase().includes(term)) : products;
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error.message}</p>;
    }
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 mt-10 md:mt-20">
            <h1 className="text-3xl font-bold text-cyan-700 mb-8 text-center">
                Our Furniture Collection
            </h1>
            <div className="flex justify-between items-center px-4 py-4">
                <h1 className='text-xl font-semibold text-gray-700'>All Products <span className='text-xs text-gray-400'>({searchProduct.length} Product)</span></h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Products"/>
                </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {searchProduct.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Products
