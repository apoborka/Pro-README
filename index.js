// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown";
import fs from 'fs';
import { error } from "console";

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Please provide a brief description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide any installation instructions you wish to include.',
            name: 'gettingStarted',
        },
        {
            type: 'input',
            message: "Please provide any usage instructions you wish to include.",
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please provide any information related to how users might contribute to this project.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please provide any instructions for running tests.',
            name: 'tests',
        },
        // THIS PROMPT NEEDS TO PROVIDE A LIST OF LICENSES TO SELECT FROM
        {
            type: 'list',
            message: 'Which license do you wish to publish this project under?',
            name: 'licenseSelection',
            choices: ['MIT', 'Apache 2.0', 'BSD 3', 'BSD 2', 'GPL', 'Mozilla Public License', 'CDDL'],
        },
        {
            type: 'input',
            message: 'Please provide your GitHub username.',
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: 'Please provide your email address for questions.',
            name: 'email',
        }
    ])
    .then((data) => {
        const fileName = `${data.projectName}.md`

        fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Your README has been generated successfully!')
        );
    });

// --------------------------------------------------------------------------------

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
