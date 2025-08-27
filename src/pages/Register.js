import React from 'react';
const Register=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
                <form className="space-y-4">
                
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Username</label>
                            <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus :ring green-200"
                            required/>
                            </div>
                            <div className="block text-sm font-medium text-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200">
                           
                            <button 
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">Register</button>
                            </div>
                            </form>
                        </div>
                    </div>
               
       
    )
}
export default Register