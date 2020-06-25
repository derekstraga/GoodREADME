const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./Develop/utils/generateMarkdown");

    const questions = [
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide instructions examples for use.",
            name: "instructionExample"
        },
        {
            type: "input",
            message: "provide License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "provide License url ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
            name: "contributorsGitUserName"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        },
        {
            type: "input",
            message: "Do you have any questions about this application?",
            name: "questionsFromUser"
        }
        ];

// write a function writeToFile(filename, data)
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}




// us passing in questions array and writeToFile = generateMarkdown

function init() {
    inquirer.prompt(questions).then((questionResponses) => {
        writeToFile("README.md", generateMarkdown ({ ...questionResponses }));
    })
}
init();