// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from 'fs';
import colors from 'colors';

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: colors.green('What is the title of your project?'),
            name: 'projectName',
        },
        {
            type: 'input',
            message: colors.green('Please provide a brief description of your project.'),
            name: 'description',
        },
        {
            type: 'input',
            message: colors.green('Please provide any installation instructions you wish to include.'),
            name: 'gettingStarted',
        },
        {
            type: 'input',
            message: colors.green("Please provide any usage instructions you wish to include."),
            name: 'usage',
        },
        {
            type: 'input',
            message: colors.green('Please provide any information related to how users might contribute to this project.'),
            name: 'contributing',
        },
        {
            type: 'input',
            message: colors.green('Please provide any instructions for running tests.'),
            name: 'tests',
        },
        // THIS PROMPT NEEDS TO PROVIDE A LIST OF LICENSES TO SELECT FROM
        {
            type: 'list',
            message: colors.green('Which license do you wish to publish this project under?'),
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'BSD 3', 'BSD 2', 'Mozilla Public License'],
        },
        {
            type: 'input',
            message: colors.green('Please provide your GitHub username.'),
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: colors.green('Please provide your email address for questions.'),
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
            console.log(colors.green('Your '),colors.green.bold('PROFESSIONAL README '),colors.green('has been generaged successfully!'));
        }
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
