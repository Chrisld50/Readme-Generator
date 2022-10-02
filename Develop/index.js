// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
   {
       type: 'input',
       name: 'title',
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
       type: 'list',
       name: 'license',
       choices: [ 'MIT License', 'GNU General Publice License v3.0', 'Eclipse Publice License 2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Apache License 2.0' ],
       message: 'choose a license for your project'
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
];


function init() {

    inquirer.prompt(questions).then((data => {
        const READMEContent = generateMarkdown(data)
        fs.writeFile('newREADME.md', READMEContent, (err) =>
        err? console.log(err) : console.log('README created!')
        )
    }))

}

// Function call to initialize app
init();
