const db = require('../db/connection');
const inquirer = require('inquirer');



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
    ]).then(userSelection =>{
        let selection = userSelection.selection;
        switch(selection.toLowerCase()){
            case 'View Employees':
                viewEmployees();
                break;
                case 'View Manager':
                    viewManager();
                    break;
                    case 'View Roles':
                        viewRoles();
                        break;
                        case 'View Departments':
                            viewDepartments();
                            break;
                            case 'Add Department':
                                addDepartement();
                                break;
                                case 'Add a Role':
                                    addRole();
                                    break;
                                    case 'Add an Employee':
                                        addEmployee();
                                        break;
                                        case 'Update and Employee role':
                                        updateRole();
                                        break;
                                        default:
                                            endApp();
        }

    });
};
//function for choices given
const viewEmployees = () => {
    const dataEmp = "SELECT * FROM employee;"
}



module.exports =promptUser;