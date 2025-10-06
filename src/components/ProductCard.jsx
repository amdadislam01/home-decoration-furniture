import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({ item }) => {
    return (
        <div className="group bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition p-4 flex flex-col">
            {/* Image */}
            <div className="w-full h-52 overflow-hidden rounded-lg">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex-1 mt-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Category: <span className="text-cyan-600">{item.category}</span></span>
                    <span>Stock: {item.stock}</span>
                </div>

                <p className="text-sm">Material: {item.material}</p>
                <p className="text-sm">Dimensions: {item.dimensions}</p>
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-cyan-700">৳{item.price}</span>
                <Link to={`/product/${item.id}`} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition">
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
