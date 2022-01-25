const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const fs = require('fs');
/* const intern = require('./lib/_mocks_/Intern.js');
const employee= require('./lib/_mocks_/Employee.js'); */
const Manager = require('./lib/_mocks_/Manager');
/* const engineer = require('./lib/_mocks_/engineer.js'); */
const teamMembers = [];
// this is used to make sure there isnt repeat ids
/* const idArray = []; */

function writeToFile(fileName, data) {
  console.log('writeToFile');
  return fs.writeFileSync(fileName, data)
}


const promptManager = () => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'managername',
      message: 'What is the manager name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'managerID',
      message: 'What is your manager ID? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter a valid ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manageremail',
      message: 'What is the manager email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is the office number?',

      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
      }
    },
  ]).then(answers => {
    const manager = new Manager(answers.managername, answers.managerID, answers.manageremail, answers.office)
    teamMembers.push(manager)
    optionMenu()
  })
};

const optionMenu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Manager profile is complete, what is the next employees role? (Choose one)',
      choices: ['Engineer', 'Intern', 'None'],
      validate: roleInput => {
        if (roleInput) {
          return true;
        } else {
          console.log('Please only choose one!');
          return false;
        }
      }
    },
  ]).then(answers => {
    if (answers.role === 'Engineer') {
      roleEngineer(answers);
    } else if (answers.role === 'Intern') {
      roleIntern(answers);
    } else {
      console.log('your profile has been made!')
    }
  })
};

const roleEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineername',
      message: 'What is the engineers name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'engineerID',
      message: 'What is your engineer ID? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter a valid ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineeremail',
      message: 'What is the engineer email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your github username!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'more',
      message: 'Would you like to add another employee?',
      choices: ['Yes', 'No'],
      validate: roleInput => {
        if (roleInput) {
          return true;
        } else {
          console.log('Please only choose one!');
          return false;
        }
      }
    },
  ]).then(answers => {
      if (answers.more === 'Yes') {
        optionMenu(answers);
      } else {
        writeToFile('index.html', generatePage({ ...answers }))
        console.log('your profile has been made!')
      }
    })
};


const roleIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internname',
      message: 'What is the intern name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'internID',
      message: 'What is your intern ID? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter a valid ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internemail',
      message: 'What is the intern email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school do you attend?',

      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please enter a valid school!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'more',
      message: 'Would you like to add another employee?',
      choices: ['Yes', 'No'],
      validate: roleInput => {
        if (roleInput) {
          return true;
        } else {
          console.log('Please only choose one!');
          return false;
        }
      }
    },
  ]).then(answers => {
    if (answers.more === 'Yes') {
      optionMenu(answers);
    } else {
      writeToFile('index.html', generatePage({ ...answers }))
      console.log('your profile has been made!')
    }
  })
}




promptManager();

  
  









