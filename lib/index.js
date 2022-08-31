const db = require('../db/connection');
const inquirer = require('inquirer');
const consoleTable = require("console.table");



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
    console.log('user selcted view employees');
    const dataEmp = "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id;"
    db.query(dataEmp, (err, results) => {
        console.log(dataEmp);
        if(err) throw err;
        console.table(dataEmp);
        promptUser()
    });
}


const endApp = () => {
    //process to end inquirer
    process.exit();
}
module.exports =promptUser;