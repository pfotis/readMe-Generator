const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkDown = require('./utils/generateMarkdown');

// this is the object with the question the user could anser and built the readme file
const question =[
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  {
    type: 'checkbox',
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
    name: 'description',
    message: 'Please write a decription of your project:',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
    default: 'npm install inquirer'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run for test?',
    default: 'node index.js'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using this repository?'
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contributing to this repository?'
  },
];


const promptUser = (Q) => {
  return inquirer.prompt(Q)
}

const writeToFile = (fileName, data) => {
  return fs.writeFileSync(fileName, data);
}


const init = async () => {
  try {
    const answers = await promptUser(question);
    
    const readMeFile = generateMarkDown(answers);

    writeToFile('./output/readMe.md', readMeFile);

    console.log('Successfully wrote to readme.md');
  } catch (err) {
    console.log(err);
  }
};

init();