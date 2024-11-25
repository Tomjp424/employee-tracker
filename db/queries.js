import { pool } from "../src/connection.js";

const getAllDepartments = async () => {
    try {
        const response = await pool.query(
            'SELECT * FROM department;'
        );
        return response.rows;
    } catch (error) {
        console.error('Error getting departments:', error);
    }
};

const getAllRoles = async () => {
    try {
    const response = await pool.query(
        `SELECT role.id, title, salary, department.name AS department 
        FROM role 
        JOIN department ON role.department_id = department.id;`
    );
    return response.rows;
    } catch (error) {
        console.error('Error getting roles:', error);
    }
};

const getAllEmployees = async () => {
    try {
    const response = await pool.query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, salary, department.name AS department,
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id`
    );
    return response.rows;
    } catch (error) {
        console.error('Error getting employees:', error);
    }
};


export {getAllDepartments, getAllRoles, getAllEmployees};