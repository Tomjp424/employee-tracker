import inquirer from "inquirer";
import { getAllDepartments, getAllRoles, getAllEmployees } from "./db/queries.js";
import { addDepartment, addRole, addEmployee} from "./db/operations.js";
import { updateEmployee } from "./db/mutations.js";

const mainMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuSelection',
                message: 'Please make a selection:',
                choices:[
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'Show All Departments',
                    'Show All Roles',
                    'Show All Employees',
                    'Update Employee',
                    'Exit'
                ]
            }
        ])
        .then((selection) => {
            switch (selection.menuSelection) {
                case 'Show All Departments':
                    getAllDepartments()
                    .then((departments) => {
                        console.table(departments);
                        mainMenu();
                    });
                    break;
                case 'Show All Roles':
                    getAllRoles()
                    .then((roles) => {
                        console.table(roles);
                        mainMenu();
                    });
                    break;
                case 'Show All Employees':
                    getAllEmployees()
                    .then((employees) => {
                        console.table(employees);
                        mainMenu();
                    });
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee':
                    updateEmployee();
                    break;
                case 'Exit':
                    console.log('Exiting...');
                    process.exit(0);
            }
        })
};
mainMenu();

export default mainMenu;