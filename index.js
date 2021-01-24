// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github?',
  },
  {
    type: 'checkbox',
    message: 'What languages do you use?',
    name: 'stack',
    choices: [
        'HTML',
        'CSS',
        'JavaScript', 
        'jQuery',
        'nodejs',
        'MySQL',
        ]
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license will you use in your project?',
    choices: [
        'MIT',
        'Unlicense',
        'Apache 2.0',
        'GNU v3',
        'BSD 3-Clause',
        'Mozilla Public License 2.0'
        ]
  },
  {
    type: 'input',
    name: 'shortDescription',
    message: 'Please write a short decription of youy project:',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
