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
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
            }
        ])
    console.log(answers)


    if (answers.decision === 'View All Employees') {

        viewEmployees()
    }
    else if (answers.decision === 'Add Employee') {
        addEmployee()
    }
    else if (answers.decision === 'View All Roles') {
        viewRoles()
    }
    else if (answers.decision === 'Add Role') {
        addRole()
    }
    else if (answers.decision === 'View All Departments') {

        viewDepartments()
    }
    else if (answers.decision === 'Add Department') {
        addDepartment();
    }
    else if (answers.decision === 'Quit') {
        connection.end();
    }

}

async function viewEmployees() {
    const [rows] = await connection.execute('SELECT * FROM employee');
    console.table(rows)
    menuOptions();
}
async function viewRoles() {
    const [rows] = await connection.execute('SELECT role.id, role.title, role.salary, department.department_name FROM role JOIN department on role.department_id = department.id');
    console.table(rows)
    menuOptions();
}
async function viewDepartments() {
    const [rows] = await connection.execute('SELECT * FROM department');
    console.table(rows)
    menuOptions();
}


async function addEmployee() {
    const newEmployee = await inquirer.prompt([
        {
            type: "input",
            message: "Employee First Name:",
            name: "first_name"
        },
        {
            type: "input",
            message: "Employee Last Name:",
            name: "last_name"
        },
        {
            type: "list",
            message: "Choose Employee Role:",
            name: "role_id",
            choices: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            type: "list",
            message: "Choose Manager id:",
            name: "manager_id",
            choices: [1, 3, 5, 7],
        }

    ])
    console.log(newEmployee);
    const [newEmployeeData] = await connection.query('INSERT INTO employee SET ?', newEmployee);
    console.table(newEmployeeData)
    menuOptions();
};



// const departmentMapping = {
//     'Sales': 1,
//     'Engineering': 2,
//     'Finance': 3,
//     'Legal': 4
// }; Object.keys(departmentMapping)

async function addRole() {
    const newRole = await inquirer.prompt([
        {
            type: "input",
            message: "New Role Title:",
            name: "title"
        },
        {
            type: "list",
            message: "New Role Salary:",
            name: "salary",
            choices: ['80', '100', '120', '150', '160']
        },
        {
            type: "list",
            message: "Enter Department:",
            name: "department_id",
            choices: [1, 2, 3, 4],
        }
    ])

    const newRoleData = await connection.query('INSERT INTO role SET ?', newRole);
    console.log(newRole);
    console.table(newRoleData)
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
    const [newDepartmentData] = await connection.query('INSERT INTO department SET ?', newDepartment);
    console.table(newDepartmentData)
    menuOptions();
};