const inquirer = require('inquirer');
const fs = require('fs')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

function addEmployee () {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeChoices',
        message: 'Which type of employee would you like to add to the team?',
        choices: ['Manager', 'Engineer', 'Intern', 'Finalize team generator']
    }]).then(function(choice) {
        switch(choice.addSelectEmployee) {
            case 'Manager': addManager();
                break;
            case 'Engineer': addEngineer();
                break;
            case 'Intern': addIntern();
                break;

            default: createHtml();
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the manager?',
            name: 'managerName',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the manager's ID number?",
            name: 'managerId',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter a numerical value for the manager's ID");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: 'managerEmail',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true
                } else {
                    console.log("Please enter the appropriate email address for the manager");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'managerPhone',
            validate: input => {
                if (isNaN(input)) {
                    console.log('Please enter an office number')
                    return false;
                } else {
                    return true
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerPhone);
        teamArray.push(manager);
        addEmployee();
    });
}

