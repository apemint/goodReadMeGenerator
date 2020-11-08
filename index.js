
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = (answers) =>

    `# ${answers.title}

## Description
${answers.description}
## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Contribution](#contribution)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)


## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## License
This project is licensed under ${answers.license} - see the  file for details

##Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Please contact me with any questions 
GitHub: ${answers.github}
Email: ${answers.email}`;


inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of this project?",
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Any licenses used?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Any contribution guidelines?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is you email?',
        },
        {
            type: 'input',
            name: 'deployedProject',
            message: " What is your deployed project URL?",
            default: 'none',
        },
    ])
    .then((answers) => {
        const fileName = 'README.md';
        fs.writeFile(fileName, generateReadMe(answers), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Successfully wrote to README.md");
            }
        });

    });


