import React from "react";
const Home=()=>{
    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <section className="bg-white rounded-lg shadow p-8 text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome to Book Bazar</h1>
                <p className="text-gray-700 mb-6">
                    A peer-to-peer platform to exchange,buy,and sell books easily.Join our community of readers!
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-gray-100 text-green-600 px-4 py-2 rounded hover:bg-gray-300 transition">
                        Post a Book
                    </button>
                </div>
            </section>
            <section className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded shadow text-center">
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Direct Messaging</h3>
                    <p className="text-gray-600">Find the exact book you're looking for using powerful search and filters</p>
                </div>
                <div className="bg-white p-6 rounded shadow text-center">
                    <h3 className="text-xl font-semibold text-green-600 mb-2">WishList&Save</h3>
                    <p className="text-gray-600">Bookmark interseting books and revisit them later anytime</p>
                </div>
            </section>
        </div>
    )
}
export default Home;