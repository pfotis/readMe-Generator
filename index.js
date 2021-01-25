const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkDown = require('./utils/generateMarkdown');


const question =[
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
    name: 'shortDescription',
    message: 'Please write a short decription of youy project:',
  }
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
    if(answers.stack.length == 0)
    console.log("why ???");

    const readMeFile = generateMarkDown(answers);

    writeToFile('readMe.md', readMeFile);

    console.log('Successfully wrote to readme.md');
  } catch (err) {
    console.log(err);
  }
};


init();