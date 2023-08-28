import mysql from 'mysql2/promise'; 

const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'company_db' });


import inquirer from 'inquirer';
menuOptions();
async function menuOptions() {
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
        
        viewEmployees()
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
        addDepartment();
    }
    
}

async function viewEmployees() {
    const [rows] = await connection.execute('SELECT * FROM employee');
        console.table(rows)
        menuOptions();
}









async function addDepartment() {
    const newDepartment = await inquirer.prompt([
        {
            type: "input",
            message: "New Department Name:",
            name: "department_name"
        }
    ])
    console.log(newDepartment);
    const [rows] = await connection.query('INSERT INTO department SET ?', newDepartment);
    console.table(rows)
    menuOptions();
}