const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('generateMarkdown')

inquirer
  .prompt([
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
  ])
  .then((data) => {
    makeFile(data)
  });

// TODO: Create a function to write README file
const makeFile = (data) => {
    const fileName = 'README.md';
    fs.writeFile(fileName, 
        `# ${data.title} 
        
        ## Description
        ${data.description} 
        
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        
        ## Installation
        ${data.installation}
        
        ## Usage
        ${data.usage}

        ## Contribution
        ${data.contributions}

        ## Tests
        ${data.test}

        ## Questions
        If you have any questions, reach out to me at https://github.com/${data.username}, or [shoot me an email](${data.email}.)
        
        ## License
        ${data.license} `
    , (err)=>
    err ? console.log(err) : console.log('success!')
    )}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




