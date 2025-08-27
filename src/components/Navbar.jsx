import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
const Navbar=()=>{
    return(
       <nav className="bg-green-600 text-black-300 px-4 py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
<Link to="/" className="text-4xl font-bold">Book Bazar</Link>
<div className="space-x-4">
<Link to="/" className="hover:text-red-600">Home</Link>
<Link to="/wishlist" className="hover:text-red-600">WishList</Link>
<Link to="/register" className="hover:text-red-600">Register</Link>
<Link to="/login"  className="hover:text-red-600">Login</Link> 
</div>
        </div>
       </nav>
    )
}
export default Navbar;