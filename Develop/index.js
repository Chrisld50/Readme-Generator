// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    inquirer
.prompt([
   {
       type: 'input',
       name: 'project',
       message: 'What is your project name?'
   },
   {
       type: 'input',
       name: 'description',
       message: 'please write a description for Readme'
   },
   {
       type: 'input',
       name: 'installation',
       message: 'please provide a walkthrough for your installation'
   },
   {
       type: 'input',
       name: 'usage',
       message: 'please provide information on the usage of your project'
   },
   {
       type: 'input',
       name: 'license',
       message: 'please provide the licenses that were used'
   },
   {
       type: 'input',
       name: 'contributing',
       message: 'please provide the contributors to the project'
   },
   {
       type: 'input',
       name: 'test',
       message: 'please provide test instructions'
   },
   {
       type: 'input',
       name: 'github',
       message: 'please provide your gethub profile'
   },
   {
       type: 'input',
       name: 'email',
       message: 'please provide your email'
   }
   
])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data = ({project, description, })

`## ${project}

## Description

${description}

## Table of Contents
Installation

Usage

License

Contributing

Test

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}
## Test
${test}

## My information
My Github: ${github}
My Email: ${email}

 `;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
