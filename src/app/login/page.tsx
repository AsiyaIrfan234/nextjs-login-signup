import React from 'react';

const Login = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="you@example.com" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input type="password" id="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Enter your password" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
                <p className="mt-4 text-center">Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
            </form>
        </div>
    );
};

export default Login;
