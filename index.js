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
      message: 'What is your role? (Choose one)',
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
    job(answers.role)
  })
}

const job = (role) => {
  if (role == 'Engineer') {
    engineer = () => {
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
      ]).then(answers => {
        optionMenu()
      })
    }
  } else if (role == 'Intern') {
    intern = () => {
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
          name: 'engineerID',
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
      ]).then(answers => {
        optionMenu()
      })
    }

  } else {
    fs.writetoFile('./dist/index.html', generatePage(teamMembers))

  }
};


promptManager()

  
  









