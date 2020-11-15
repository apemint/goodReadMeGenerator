//require
const inquirer = require("inquirer");
const fs = require("fs");

// questions
const questions = [
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
        choices: ['none', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        default: 'none',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Any contributing guidelines?',
        default: 'none',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests?',
        default: 'none',
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
];

// initialized outside the prompts because couldnt get it to work inside the try when its called in the write function.
var licenseCom;
var licenseBadge;

//main
const init = async () => {
    try {
        const answers = await inquirer.prompt(questions);
        var licenses = answers.license;
        //function to associate chosen license with its link and badge 
        function getLicense(licenses) {
            if (licenses == 'GNU AGPLv3') {
                licenseCom = 'https://choosealicense.com/licenses/agpl-3.0/#';
                licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
            } else if (licenses == 'GNU GPLv3') {
                licenseCom = 'https://choosealicense.com/licenses/gpl-3.0/';
                licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            } else if (licenses == 'GNU LGPLv3') {
                licenseCom = 'https://choosealicense.com/licenses/lgpl-3.0/';
                licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
            } else if (licenses == 'Mozilla Public License 2.0') {
                licenseCom = 'https://choosealicense.com/licenses/mpl-2.0/';
                licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            } else if (licenses == 'Apache License 2.0') {
                licenseCom = 'https://choosealicense.com/licenses/apache-2.0/';
                licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            } else if (licenses == 'MIT License') {
                licenseCom = 'https://choosealicense.com/licenses/mit/';
                licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            } else if (licenses == 'Boost Software License 1.0') {
                licenseCom = 'https://choosealicense.com/licenses/bsl-1.0/';
                licenseBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            } else if (licenses == 'The Unlicense') {
                licenseCom = 'https://choosealicense.com/licenses/unlicense/';
                licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
            } else {
                licenseCom = '';
                licenseBadge = '';
            };

        };
       //log to make sure variables are working
        console.log(licenses);
        getLicense(licenses);
        console.log(licenseCom);
        console.log(licenseBadge);

        // setting function to variable cuz its cleaner looking.
        const md = generateReadMe(answers);
        //=======================================================================================
        const fileName = "test.md"; ///======----CHANGE THIS TO YOUR README.MD File ----------===============
        //=======================================================================================

        // here we write to the (desired file, using the function)
        fs.writeFileSync(fileName, md);

        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
};
init() //runs the whole thing

///this function generates the markdown content using responses
const generateReadMe = (answers) =>

    `#  ${answers.title}
    ${licenseBadge}

## Description
${answers.description}

## Deployed Project
${answers.deployedProject}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${licenseBadge}
This project is licensed under [${answers.license}](${licenseCom}) - see the  file for details

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Please contact me with any questions! 
[GitHub](https://github.com/${answers.github})
Email: ${answers.email}
`;