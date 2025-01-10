import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({ employee, deleteEmployee }) => {

    const naviagte = useNavigate();
    const editEmployees = (e, id) => {
        e.preventDefault();
        naviagte(`/editEmployee/${id}`);

    }

    return (
        <tr key={employee.id} className="hover:bg-gray-50 transition-colors duration-200">
  <td className="text-left px-6 py-4 whitespace-nowrap">
    <div className="text-sm font-medium text-gray-800">{employee.firstName}</div>
  </td>
  <td className="text-left px-6 py-4 whitespace-nowrap">
    <div className="text-sm font-medium text-gray-800">{employee.lastName}</div>
  </td>
  <td className="text-left px-6 py-4 whitespace-nowrap">
    <div className="text-sm font-medium text-gray-800">{employee.emailId}</div>
  </td>
  <td className="text-center font-medium px-6 py-4 whitespace-nowrap">
    <div className="flex justify-center items-center space-x-4">
      <a
        onClick={(e, id) => editEmployees(e, employee.id)}
        className="text-indigo-500 hover:text-indigo-700 hover:underline transition ease-in-out duration-200 cursor-pointer"
      >Edit</a>
      <a
        onClick={(e, id) => deleteEmployee(e, employee.id)}
        className="text-red-500 hover:text-red-700 hover:underline transition ease-in-out duration-200 cursor-pointer"
      >Delete</a>
    </div>
  </td>
</tr>

    )
}

export default Employee