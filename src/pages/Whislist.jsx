import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("wishlist"));
    if (saveList) setWishlist(saveList);
  }, []);

  // Sorting logic
  const sortedWishlist = [...wishlist].sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.price - b.price;
    } else if (sortOrder === "high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  // Remove item
  const removeFromWishlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your wishlist!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedList = wishlist.filter((p) => p.id !== id);
        setWishlist(updatedList);
        localStorage.setItem("wishlist", JSON.stringify(updatedList));

        Swal.fire("Removed!", "The item has been removed.", "success");
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
          My Wishlist ❤️
        </h1>

        {/* Sorting Dropdown */}
        {wishlist.length > 0 && (
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-gray-600 font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="default">Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        )}
      </div>

      {/* Wishlist Content */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-4 text-gray-500">
          <img
            src="https://i.ibb.co.com/Q3qxwdkM/Your-wishlist-is-empty-removebg-preview.png"
            alt="Empty Wishlist"
            className="w-full h-70 object-contain mb-4"
          />
          <p className="text-lg">Your wishlist is empty!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedWishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition border border-gray-100"
            >
              {/* Image */}
              <div className="w-full h-52 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-55"
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                <p className="text-xl text-cyan-600 font-bold">
                  ৳ {item.price.toLocaleString()}
                </p>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition cursor-pointer"
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
