const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown')

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of application.',
        name: 'description',
    },
    {
        type: 'input',
        message: "What are the steps required to install your project?",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Provide instructions and examples for use.",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Are there any instructions that projects contributors need to know?",
        name: 'contributions',
    },
    {
        type: 'input',
        message: "What are your project's testing instructions?",
        name: 'test',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What license does this project have?",
        name: 'license',
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer
        .prompt(questions)

        .then(inquirerResponses => {
            writeToFile('README.md', generateMarkdown({
                ...inquirerResponses
            }));
            (err) =>
                err ? console.log(err) : console.log('success!')
        } 
    }

// Function call to initialize app
init()
