const db = require('../db/connection');
const inquirer = require('inquirer');
// const consoleTable = require("console.table");



//Prompt begins below
const promptUser = () => {
    inquirer.prompt([
        {
            message: "What would like to accomplish?",
            name: "selection",
            type: "list",
            choices: [
                "View Employees",
                "View Managers",
                "View Roles",
                "View Departments",
                "Add Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee role"
            ]
        }
    ]).then(answers => {
        const action = answers.selection;
        if (action === "View all employees") {
            viewEmployees();
        };
        if (action === "View all Managers") {
            viewManager();
        };
        if (action === "View all roles") {
            viewRoles();
        };
        if (action === "View all departments") {
            viewDepartments();
        };
        if (action === "Add new department") {
            addDepartment();
        };
        if (action === "Add a new role") {
            addRole();
        };
        if (action === "Add an Employee") {
            addEmployee();
        };
        if (action === "Update employee role") {
           updateEmployeeRole();
        };
        if (action === "Exit") {
            process.exit();
        };
    });
};
    
   
   
//function for choices given
const viewEmployees = () => {
    //talking to mysql table
    const sql =  `SELECT employee.id,
    employee.first_name, AS 'First name'
    employee.last_name, AS 'Last name'
    role.title AS 'Title'
    role.salary AS 'Salary,
    department.name AS 'Department',
    CONCAT (manger.first_name, "", manager.last_name) AS Manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = role.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id`
    db.query(sql, (err, rows) => {
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const viewRoles = () => {
    const sql = `SELECT role.id AS 'ID',
    role.title AS 'Title',
    role.salary AS 'Salary',
    department.name AS 'Department',
    FROM role
    LEFT JOIN departement ON role.department_id = department.id
    `
    db.query(sql, (err, rows) => {
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const viewDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const viewManager = () => {
    const sql = `SELECT first_name,
                 last_name,
                 id
                 FROM employee;
                 `
    db.query(sql, (err, rows) => {
        if(err){
            throw err;
        }
        const employee = rows.map(({first_name, last_name, id}) => ({name: `${first_name} ${last_name}`, value: id}));
        inquirer.prompt([
            {
            type: "list",
            name: "managerEmployees",
            message: "Choose a manager",
            choices: "employee"
            }
        ]).then(employeeAnswer => {
            const manager = employeeAnswer.managerEmployees;
            const params = [manager];
            const sql = `SELECT id AS ID,
            first_name AS 'First name'
            last_name AS 'Last name'
            FROM employee
            WHERE manager_id = ?
            `
            db.query(sql, params, (err, rows) => {
                if(err) {
                    throw err;
                }
                if(rows.length === 0) {
                    console.log("Employee not in managment role");
                    return promptUser();
                }
                console.table(rows);
                return promptUser();
            });
        });
    });

    //adding department
    const addDepartment = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the deparment?",
                validate: inputName => {
                    if (inputName) {
                        return true;
                    }else {
                        console.log("Name needs to be entered.");
                        return false;
                    };
                }
            }
        ])
        .then(answer => {
            const sql = 
            `INSERT INTO department (name)
            VALUES (?)`;
            const params = answer.name;
            db.query(sql, params, (err) => {
                if (err) {
                    throw err;
                }
                console.log("New department added!");
                return viewDepartments();
            })
        })
    }

    
    
}
















module.exports =promptUser;