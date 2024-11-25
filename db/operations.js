import inquirer from "inquirer";
import { pool } from "../src/connection.js";
import mainMenu from "../app.js";
import { getAllDepartments, getAllEmployees, getAllRoles } from "./queries.js";

const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'What is the name of the department?'
            }
        ])
        .then(async (response) => {
            try {
                const query = 
                `INSERT INTO department (name) 
                VALUES ($1);`;

                const values = [response.departmentName];

                const result = await pool.query(query, values);
                console.log('Department added successfully.');
                mainMenu();
            } catch (error) {
                console.error('Error adding department: ', error);
                mainMenu();
            }
        })
};

const addRole = async () => {
    try {
        const departmentList = await getAllDepartments();
        if (!departmentList.length) {
            console.log('Please add at least one department');
            return mainMenu();
        }
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'roleTitle',
                    message: 'What is the title of the role?'
                },
                {
                    type: 'input',
                    name: 'roleSalary',
                    message: 'What is the annual salary of the role?',
                    validate: (input) => {
                        const salary = parseFloat(input);
                        if (isNaN(salary) || salary < 0) {
                            return 'Please enter a valid salary.'
                        } else {
                            return true;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'roleDepartment',
                    message: "What department does the role belong to?",
                    choices: 
                        departmentList.map((department) => ({
                            name: department.name,
                            value: department.id,
                        }))
                },
            ])
            .then(async (response) => {
                    const query = 
                    `INSERT INTO role (title, salary, department_id)
                    VALUES ($1, $2, $3);`
                    
                    const values = [
                        response.roleTitle,
                        response.roleSalary,
                        response.roleDepartment
                    ]

                    const result = await pool.query(query, values);
                    console.log('Role added successfully.');
                    mainMenu();
            })
    } catch (error) {
        console.error('Error adding role: ', error);
        mainMenu();
    }
};

const addEmployee = async () => {
    try {
        const roleList = await getAllRoles();
        if (!roleList.length) {
            console.log('Please add at least one role.');
            return mainMenu();
        }
        const employeeList = await getAllEmployees();

        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'employeeFirstName',
                    message: "What is the employee's first name?"
                },
                {
                    type: 'input',
                    name: 'employeeLastName',
                    message: "What is the employee's last name?"
                },
                {
                    type: 'list',
                    name: 'employeeRole',
                    message: "What is the employee's role?",
                    choices: 
                    roleList.map((role) => ({
                        name: role.title,
                        value: role.id,
                    }))
                },
                {
                    type: 'list',
                    name: 'employeeManager',
                    message: "Who is the employee's manager?",
                    choices: [
                        {name: 'None', value: null},
                        ...employeeList.map((employee) => ({
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee.id,
                        })),
                    ]
                },
            ])
            .then(async (response) => {
                    const query =
                    `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                    VALUES ($1, $2, $3, $4);`

                    const values = [
                        response.employeeFirstName,
                        response.employeeLastName,
                        response.employeeRole,
                        response.employeeManager
                    ]

                    const result = await pool.query(query, values);
                    console.log('Employee added successfully.');
                    mainMenu();
            })
    } catch (error) {
        console.error('Error adding employee: ', error);
        mainMenu();
    }
}

export {addDepartment, addRole, addEmployee};