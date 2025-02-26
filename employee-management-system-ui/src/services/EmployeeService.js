import axios from "axios";

const EMPLOYEE_API_BASE_URL = 'http://localhost:8089/api/employees';

class EmployeeService {

    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getAllEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    updateEmployeeById(id, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    }

}
export default new EmployeeService();