// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from 'fs';
import { error } from "console";
import colors from 'colors';

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: colors.green.bold('What is the title of your project?'),
            name: 'projectName',
        },
        {
            type: 'input',
            message: colors.green.bold('Please provide a brief description of your project.'),
            name: 'description',
        },
        {
            type: 'input',
            message: colors.green.bold('Please provide any installation instructions you wish to include.'),
            name: 'gettingStarted',
        },
        {
            type: 'input',
            message: colors.green.bold("Please provide any usage instructions you wish to include."),
            name: 'license',
        },
        {
            type: 'input',
            message: colors.green.bold('Please provide any information related to how users might contribute to this project.'),
            name: 'contributing',
        },
        {
            type: 'input',
            message: colors.green.bold('Please provide any instructions for running tests.'),
            name: 'tests',
        },
        // THIS PROMPT NEEDS TO PROVIDE A LIST OF LICENSES TO SELECT FROM
        {
            type: 'list',
            message: colors.green.bold('Which license do you wish to publish this project under?'),
            name: 'licenseSelection',
            choices: ['MIT', 'Apache 2.0', 'BSD 3', 'BSD 2', 'GPL', 'Mozilla Public License', 'CDDL'],
        },
        {
            type: 'input',
            message: colors.green.bold('Please provide your GitHub username.'),
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: colors.green.bold('Please provide your email address for questions.'),
            name: 'email',
        }
    ])
    .then((data) => {
        const fileName = `${data.projectName}.md`
        const markdownContent = generateMarkdown(data);
        
        writeToFile(fileName, markdownContent);
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(colors.red.bold(err));
        } else {
            console.log(colors.green.bold('Your README has been generated successfully!'));
        }
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
