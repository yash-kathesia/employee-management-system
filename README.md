# Employee Management System

## Overview
The Employee Management System is a web application designed to manage employee records efficiently. The backend is powered by Spring Boot, while the frontend is built using React.js with Tailwind CSS for styling. The application allows for adding, updating, deleting, and viewing employee details, ensuring a seamless management experience. The system uses MySQL to store and manage data.

## Features
- **Add Employee**: Allows users to add new employees to the system.
- **Update Employee**: Enables users to update employee details.
- **Delete Employee**: Provides functionality to remove employees from the system.
- **View Employee**: Displays detailed information of employees in an organized manner.
- **Responsive Design**: The frontend is designed to be responsive and works well on both desktop and mobile devices.
- **User-friendly Interface**: The React frontend is easy to use and provides an intuitive user experience.
- **Tailwind CSS Integration**: The app utilizes Tailwind CSS for a clean and modern design.

## Technologies Used
- **React**: For building the user interface (frontend).
- **Spring Boot**: For backend services and API development.
- **MySQL**: For storing employee data.
- **Tailwind CSS**: For styling the frontend components.
- **JavaScript**: The main programming language for the frontend.
- **HTML/CSS**: For structuring and styling the frontend.
- **npm create-react-app**: Used to initialize the React app.
  
## Project Structure

```
.
├── employee-management-system/   # Java Backend
│   ├── src/                      # Backend source code
│   ├── pom.xml                   # Project dependencies and build configuration
│   └── application.properties    # Database configuration
├── employee-management-system-ui/ # React Frontend
│   ├── src/                      # Frontend source code
│   ├── tailwind.config.js         # Tailwind CSS configuration
│   ├── package.json              # Project dependencies and scripts
│   └── public/                   # Static assets for the frontend
└── README.md
```

## Installation

### Backend (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/yash-kathesia/employee-management-system.git
   cd employee-management-system
   ```

2. Install backend dependencies (Make sure you have Java and Maven installed):
   ```bash
   mvn clean install
   ```

3. Run the backend application:
   ```bash
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8089`.

### Frontend (React.js)

1. Clone the repository:
   ```bash
   git clone https://github.com/yash-kathesia/employee-management-system-ui.git
   cd employee-management-system-ui
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Run the React app:
   ```bash
   npm start
   ```

   The frontend will start on `http://localhost:3000`.

## Usage
1. Open the React frontend at `http://localhost:3000` in your browser.
2. Use the provided UI to add, update, delete, or view employee records.
3. The data is stored in a MySQL database and can be accessed or managed through the backend API.


## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, please open an issue in this repository.