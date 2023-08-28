USE company_db;

INSERT INTO department(department_name)
VALUES('Sales'),('Engineering'),('Finance'),('Legal');

INSERT INTO role(title, salary, department_id)
VALUES('Sales Lead', 100, 1),('Salesperson',80, 1),('Lead Engineer', 150, 2),('Software Engineer', 120, 2),('Account Manager', 160, 3
),('Accountant', 125, 3),('Legal Team Lead', 250, 4), ('Lawyer', 190, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('John', 'Doe', 1, null),('Mike', 'Chan', 2, 1),('Ashley', 'Rodriguez', 3, null),('Kevin', 'Tupic', 4, 3),('Kunal', 'Singh', 5, null),('Malia', 'Brown', 6, 5),('Sarah', 'Lourd', 7, null), ('Tom', 'Allen', 8, 7);