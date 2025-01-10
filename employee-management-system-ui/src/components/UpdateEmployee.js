import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const { id } = useParams();


    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reposne = await EmployeeService.getEmployeeById(id);
                setEmployee(reposne.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();

    }, [])


    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    }

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployeeById(id, employee)
            .then((response) => {
                navigate('/employeeList')
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div className="flex max-w-2xl mx-auto mt-12 shadow-lg border border-gray-200 rounded-lg bg-white">
            <div className="px-8 py-8 w-full">
                <div className="mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800 tracking-wide text-center">
                        Update Employee
                    </h1>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                        First Name:
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                        Email ID:
                    </label>
                    <input
                        type="email"
                        name="emailId"
                        value={employee.emailId}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="flex items-center justify-between mt-8">
                    <button
                        onClick={updateEmployee}
                        className="rounded-md bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 transition duration-300 shadow-md"
                    >Update</button>
                    <button
                        onClick={() => navigate('/employeeList')}
                        className="rounded-md bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 transition duration-300 shadow-md"
                    >Cancel</button>
                </div>
            </div>
        </div>

    )
}

export default UpdateEmployee