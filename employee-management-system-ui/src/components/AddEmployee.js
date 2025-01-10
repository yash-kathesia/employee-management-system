import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: '',
        firstName: '',
        lastName: '',
        emailId: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    }

    const naviagte = useNavigate();

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: '',
            firstName: '',
            lastName: '',
            emailId: ''
        });
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log(response)
                naviagte("/employeeList");
            })
            .catch(err => { console.error(err); });

    }
    return (
        <div className="flex max-w-2xl shadow-lg border border-gray-200 rounded-lg mx-auto mt-10">
            <div className="px-10 py-8 w-full">
                <div className="font-semibold text-3xl tracking-wide text-gray-700 border-b pb-4">
                    <h1>Add New Employee</h1>
                </div>
                <div className="flex flex-col my-6">
                    <label className="block text-gray-600 text-md font-medium mb-2">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={(e) => handleChange(e)}
                        className="h-12 w-full border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter first name"
                    />
                </div>
                <div className="flex flex-col my-6">
                    <label className="block text-gray-600 text-md font-medium mb-2">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)}
                        className="h-12 w-full border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter last name"
                    />
                </div>
                <div className="flex flex-col my-6">
                    <label className="block text-gray-600 text-md font-medium mb-2">Email ID:</label>
                    <input
                        type="email"
                        name="emailId"
                        value={employee.emailId}
                        onChange={(e) => handleChange(e)}
                        className="h-12 w-full border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter email address"
                    />
                </div>
                <div className="flex space-x-6 mt-8">
                    <button
                        onClick={saveEmployee}
                        className="w-1/2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition ease-in-out duration-300 shadow-md">Save</button>
                    <button
                        onClick={reset}
                        className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition ease-in-out duration-300 shadow-md">Clear</button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee