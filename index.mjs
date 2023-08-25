import mysql from 'mysql2';
import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
}); 


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

