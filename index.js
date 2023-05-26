
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is the name of the Project?',
        name: 'title'
    },
    {
        type: 'input',
        message:'Short descritpion on the project:',
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
        name:'usage',
        default: 'N/A'
    },
    {
        type:'input',
        message:'How to contribute?',
        name:'contribution',
        default:'N/A'
    },
    {
        type: 'input',
        message :'What command should be used to run tests?',
        name:'test',
        default:'npm test'

    },
    {
        type:'list',
        message: 'What licence are you using?',
        name:'license',
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


function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data, err => err ? console.error(err) : console.log('Success!') );
}


function init() {
    inquirer.prompt(questions)
    .then((response) => 
    {
            //give response to the markdown(response)
            //get it as data and pass it in 
            const readmeData = generateMarkdown(response);
            //writeToFile( theNameOfFile, TheData thats passed)
            writeToFile('README',readmeData);

    })

}

// Function call to initialize app
init();
