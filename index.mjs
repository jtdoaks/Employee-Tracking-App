const router = require('express').Router();
const employee = require('./models/employee.js');

import mysql from 'mysql2/promise'; //right place?

const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'company_db' });


import inquirer from 'inquirer';
const answers = await inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'decision',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
        }
    ])
console.log(answers)


if (answers.decision === 'View All Employees') {
    
    const [rows] = await connection.execute('SELECT * FROM employee');
    console.table(rows)
}
else if (answers.decision === 'Add Employee') {
    // POST user input into that table.
    // variable? 
    // prompt for name? and role and manager
}
else if (answers.decision === 'View All Roles') {
    
    const [rows] = await connection.execute('SELECT * FROM role');
    console.table(rows)
}
else if (answers.decision === 'Add Role') {
    // POST user input into that table.
    // variable? 
    // prompt for department and salary
}
else if (answers.decision === 'View All Departments') {
    
    const [rows] = await connection.execute('SELECT * FROM department');
    console.table(rows)
}
else if (answers.decision === 'Add Department') {
    // POST user input into that table.
    // variable? 
    // promt for name?
}


