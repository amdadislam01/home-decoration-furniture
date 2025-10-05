import React from 'react'
import { Link } from 'react-router'
import ProductCard from '../components/ProductCard'
import useProducts from '../Hooks/useProducts'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import Loader from '../components/Loader'

const Home = () => {
    const { products, loading, error } = useProducts()
    const featuredProduct = Array.isArray(products) ? products.slice(0, 6) : [];

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error.message}</p>;
    }

    return (
        <>
            <Hero />
            <Features />
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 mt-10 md:mt-20">
                <h1 className="text-3xl font-bold text-cyan-700 mb-8 text-center">
                    <span className='border-b-3 border-dashed rounded-b-2xl pb-2 border-gray-300'>Furniture Collection</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {featuredProduct.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="mt-10 flex justify-center items-center">
                    <Link to={'/product'} className='px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition' >
                        View All Product
                    </Link>
                </div>
            </div>
            <WhyChooseUs />
            <Testimonial />
        </>
    )
}

export default Home
