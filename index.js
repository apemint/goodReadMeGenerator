const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = (answers) =>
    ``

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Give a description of the project',
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: '',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How do you use?',
        },
        {
            type: 'input',
            name: 'License',
            message: 'Licenses?'
        },
        {
            type: 'input',
            name: 'Contributing',
            message: '',
        },
        {
            type: 'input',
            name: 'Tests',
            message: ''
        },
        {
            type: 'input',
            name: 'Questions',
            message: '',
        }
    ])
    .then(answers => {
        const fileName = "";

        fs.writeFile(fileName, generateReadMe(answers), (err)=> {
            if (err) {
                console.error(err);
            } else {
                console.log("Successfully wrote to README.md");
            }
        })
    })