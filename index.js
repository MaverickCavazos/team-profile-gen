const inquirer = require('inquirer');
const { choices } = require('yargs');
const generatePage = require('./src/page-template.js');
/* const intern = require('./lib/_mocks_/Intern.js');
const employee= require('./lib/_mocks_/Employee.js');
const manager = require('./lib/_mocks_/Manager.js');
const engineer = require('./lib/_mocks_/engineer.js'); */



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
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
            type: 'checkbox',
            name: 'role',
            message: 'What is your role? (Choose one)',
            choices: ['Engineer', 'Manager', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                  return true;
                } else {
                  console.log('Please only choose one!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is your employee ID? (Required)',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please only choose one!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
        },
    ])
    
  };
  
 const job = () => {
      if (promptUser.choices = 0) {
        engineer = () => {
            return inquirer.prompt([
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
            ])
          }
        } if (promptUser.indexOf(choices[1])) {
            manager = () => {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is your email? (Required)',
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
                        name: 'office',
                        message: 'What is your office number?',
                        
                        validate: officeInput => {
                            if (officeInput) {
                              return true;
                            } else {
                              console.log('Please enter your office number!');
                              return false;
                            }
                        }
                    },
                ])
              }
   
         } if (promptUser.indexOf(choices[2])) {
            intern = () => {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is your email? (Required)',
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
                ])
              }

        } else {
        console.log('input invalid!')
         }
    };
        

  promptUser()
  .then(job);
 
  
  
  

  
  