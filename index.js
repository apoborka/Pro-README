// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown";

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input the title of your project.',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Please input your user story. (AS A userDescription, I WANT issueResolution, SO THAT resolutionReason.)',
            name: 'userStory',
        },
        {
            type: 'input',
            message: 'Please input your acceptance criteria for the completed project.',
            name: 'acceptanceCriteria',
        },
        {
            type: 'input',
            message: 'Please input the steps required to run the application.',
            name: 'gettingStarted',
        },
        {
            type: 'input',
            message: "Please input the project's licensing information.",
            name: 'license',
        }
    ])
    .then((response) => console.log(response))

// --------------------------------------------------------------------------------

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
