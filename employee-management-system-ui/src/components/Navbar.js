import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-gray-900 shadow-md">
            <div className="h-16 flex items-center justify-between px-8">
                <p className="text-white text-xl font-semibold tracking-wide">
                    Employee Management System
                </p>
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a>
                    <a href="/addEmployee" className="text-gray-300 hover:text-white transition duration-300">Add Employee</a>
                </nav>
            </div>
        </div>
    )
}
export default Navbar