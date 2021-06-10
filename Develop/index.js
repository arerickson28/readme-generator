// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs") ;
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "purpose",
        message: "What is this app for/what does it do?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the app?"
    },
    {
        type: "input",
        name: "userName",
        message: "What is your github username?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does this project have?",
        choices: ["MIT", "Apache 2.0", "none"]
    }
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => 
    err ? console.log(err) : console.log("Successfully created README.md"))
}
//filename will be "README.md" and data will be generatedMarkdown
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(
        (response) => {writeToFile("README.md", generateMarkdown(response))}
    ) ;
}

// Function call to initialize app
init();

