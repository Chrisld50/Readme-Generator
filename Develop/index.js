// TODO: Include packages needed for this application
const inquirer = require('inquirer')  // here I call the different packages I use and the other js file, generateMarkdown.
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [  // Here are the questions that are presented when its prompted in the terminal.
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
       choices: [ 'MIT', 'GPL 3.0', 'Mozilla', 'Unlicense', 'Boost Software', 'Apache' ],
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

    inquirer.prompt(questions).then((data => {  // this function runes the inquirer and creates the markdown.
        const READMEContent = generateMarkdown(data)
        fs.writeFile('newREADME.md', READMEContent, (err) =>
        err? console.log(err) : console.log('README created!')
        )
    }))

}

// Function call to initialize app
init();
