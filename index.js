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
        switch(choice.employeeChoices) {
            case 'Manager': 
                addManager();
                break;
            case 'Engineer': 
                addEngineer();
                break;
            case 'Intern': 
                addIntern();
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

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'engineerName',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the engineer's ID number?",
            name: 'engineerId',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter a numerical value for the engineer's ID");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: 'engineerEmail',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true
                } else {
                    console.log("Please enter the appropriate email address for the engineer");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'engineerGitHub',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        teamArray.push(engineer);
        addEmployee();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'internName',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the intern's ID number?",
            name: 'internId',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter a numerical value for the intern's ID");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "What is the intern's email address?",
            name: 'internEmail',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true
                } else {
                    console.log("Please enter the appropriate email address for the intern");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the intern's school name?",
            name: 'internSchool',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the interns appropriate school name");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        addEmployee();
    })
}

function createHtml() {
    console.log(teamArray)
//     fs.writeFile('./dist/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return
//         } else {
//             console.log("Team profile page has been generated.")
//         }
//     })
}


addEmployee();