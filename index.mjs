import mysql from 'mysql2/promise';


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

const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'company_db'});

  const [rows] = await connection.execute('SELECT * FROM employee');
 
  console.table(rows)