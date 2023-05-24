// GIVEN a command - line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the Project?',
        name: 'title'
    },
    {
        type: 'input',
        message:' Short descritpion on the project:',
        name: 'description'
    },
    {
        type:'input',
        message: 'What are the steps to install?',
        name:'installation',
        default:'npm i'
    },
    {
        type:'input',
        message:'What does the user need to know for using the repo?',
        name:'usage'
    },
    {
        type:'input',
        message:'How to contribute?',
        name:'contribution'
    },
    {
        type:'list',
        message: 'What licence are you using?',
        name:'licence',
        choices: ['MIT','Apache 2.0','GNU v3','BSD 2','BSD 3','Mozzila Public Licence','None']
    },
    {
        type: 'input',
        message:'What is your Github Username',
        name:'username'
    },
    {
        type:'input',
        message :'What is your email',
        name:'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data, err => err ? console.error(err) : console.log('Success!') );
}

// TODO: Create a function to initialize app
function init() {
    //inquirer.prompt(questions)
    //.then(response) => 
    //{
            //give response to the markdown(response)
            //get it as data and pass it in 
            //writeToFile( theNameOfFile, TheData thats passed)

    //}

}

// Function call to initialize app
init();
