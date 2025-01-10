import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getAllEmployees();
                setEmployees(response.data)
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    const deleteEmployee = async (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
            .then((res) => {
                if (employees) {
                    setEmployees((prevElement) => { return prevElement.filter((employee) => employee.id !== id) });
                }
            })
            .catch();
    }

    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-between items-center h-12 mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Employee List</h1>
                <button
                    onClick={() => navigate("/addEmployee")}
                    className="rounded bg-blue-600 text-white px-6 py-2 font-bold hover:bg-blue-700 transition duration-300 shadow"
                >
                    Add Employee
                </button>
            </div>
            <div className="overflow-x-auto shadow-xl border border-gray-200 rounded-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left font-medium text-gray-800 uppercase tracking-wide py-4 px-6">
                                First Name
                            </th>
                            <th className="text-left font-medium text-gray-800 uppercase tracking-wide py-4 px-6">
                                Last Name
                            </th>
                            <th className="text-left font-medium text-gray-800 uppercase tracking-wide py-4 px-6">
                                Email ID
                            </th>
                            <th className="text-center font-medium text-gray-800 uppercase tracking-wide py-4 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {employees.map((employee) => (
                                <Employee
                                    employee={employee}
                                    deleteEmployee={deleteEmployee}
                                    key={employee.id}
                                />
                            ))}
                        </tbody>
                    )}
                </table>
                {loading && (
                    <div className="flex justify-center items-center py-6">
                        <span className="text-gray-500">Loading...</span>
                    </div>
                )}
            </div>
        </div>

    )
}

export default EmployeeList