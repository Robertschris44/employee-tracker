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
                "View all employees,",
                "View all roles",
                "View all departments",
                "View employees by department"
            ]
        }
    ])
};



module.exports =promptUser;