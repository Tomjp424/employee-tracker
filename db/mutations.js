import inquirer from "inquirer";
import { pool } from "../src/connection.js";
import mainMenu from "../app.js";
import { getAllEmployees, getAllRoles } from "./queries.js";

const updateEmployee = async () => {
    try{
        const employeeList = await getAllEmployees();
        if (!employeeList.length) {
            console.log('No employees to update.');
            return mainMenu();
        }
        const roleList = await getAllRoles();

        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'chosenEmployee',
                    message: 'Please select an employee to update.',
                    choices: 
                        employeeList.map((employee) => ({
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee.id,
                        })),
                    
                },
                {
                    type: 'list',
                    name: 'newRole',
                    message: "Please select the employee's new role:",
                    choices: 
                        roleList.map((role) => ({
                            name: role.title,
                            value: role.id,
                        }))
                    
                }
            ])
            .then(async (response) => {
                const query = 
                `UPDATE employee
                SET role_id = $2
                WHERE id = $1;`

                const values = [
                    response.chosenEmployee,
                    response.newRole
                ]

                const result = await pool.query(query, values);
                console.log('Employee updated successfully.')
                mainMenu();
            })
    } catch (error) {
        console.error('Error updating employee: ', error);
        mainMenu();
    }
}

export {updateEmployee}