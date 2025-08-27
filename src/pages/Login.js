import React from 'react';
const Login=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow -md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login to Book Bazar</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                        type="email"
                        placeholder="name@gmail.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                          <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required/>
                        </div>
                        <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">Login</button>
                       </form>
                       <p className="text-sm text-center mt-4">
                        Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
                       </p>
                        </div>
                    </div>
    );
}
                    export default Login;
                
      