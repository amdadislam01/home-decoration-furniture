import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-xl font-semibold text-gray-600">
        Product Not Found ❌
      </div>
    );
  }

  const handleWishlist = () => {
    const exitstringList = JSON.parse(localStorage.getItem('wishlist'))
    let updateList = []
    if (exitstringList) {
      const isDuplicate = exitstringList.some(p => p.id === product.id)
      if (isDuplicate) return Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "This Product is already in your Whislist!",
        confirmButtonColor: "#3085d6",
      });
      updateList = [...exitstringList, product]
    }
    else {
      updateList.push(product)
    }
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: "Product has been added to your Whislist.",
      confirmButtonColor: "#3085d6",
    });
    localStorage.setItem('wishlist', JSON.stringify(updateList))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 mt-10 md:mt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-2xl w-full h-80 max-w-md object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Name & Category */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-sm mt-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full inline-block">
              {product.category}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Price */}
          <p className="text-3xl font-bold text-cyan-600">
            ৳ {product.price.toLocaleString()}
          </p>

          {/* Extra Info */}
          <div className="bg-gray-50 p-5 rounded-xl space-y-2 shadow">
            <p className="text-gray-700">
              <span className="font-semibold">Material:</span>{" "}
              {product.material}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Dimensions:</span>{" "}
              {product.dimensions}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Stock:</span>{" "}
              {product.stock > 0 ? (
                <span className="text-green-600">In Stock ({product.stock})</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-xl shadow-md transition duration-300">
              Add to Cart 🛒
            </button>
            <button onClick={() => handleWishlist()} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-xl shadow-md transition duration-300 cursor-pointer">
              Add To Whislist 🤍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
