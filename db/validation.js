// These validation functions were used in an earlier version of the program

import { pool } from "../src/connection.js";

const validateDepartment = async (departmentId) => {
    try {
        const query =
            `SELECT COUNT(*) FROM department WHERE id = $1;`;
        const {rows} = await pool.query(query, [departmentId]);
        return parseInt(rows[0].count) > 0;
    } catch (error) {
        console.error('Error validating department ID:', error);
    }
};

const validateRole = async (roleId) => {
    try {
        const query =
            `SELECT COUNT(*) FROM role WHERE id = $1;`;
        const {rows} = await pool.query(query, [roleId]);
        return parseInt(rows[0].count) > 0;
    } catch (error) {
        console.error('Error validating role ID:', error);
    }
};

const validateEmployee = async (employeeId) => {
    try {
        const query =
            `SELECT COUNT(*) FROM employee WHERE id = $1;`;
        const {rows} = await pool.query(query, [employeeId]);
        return parseInt(rows[0].count) > 0;
    } catch (error) {
        console.error('Error validating employee ID:', error);
    }
};



export {validateDepartment, validateRole, validateEmployee};