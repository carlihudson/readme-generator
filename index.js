// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');

const makeFile = (data) => {
const fileName = 'index.html';
fs.writeFile(fileName, 
    `<!DOCTYPE html>
     <html lang="en">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
     <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./assets/style.css">
        <title>My Portfolio</title>
    </head>
    <body>
            <header class="p-5 mb-4 header bg-light">
                <div class="container">
                    <h1 class="display-4">Hi! My name is ${data.name}</h1>
                    <p class="lead">I am from ${data.location}</p>
                    <p class="lead">${data.bio}</p>
                    <h3><span class="badge bg-secondary">Contact Me</span></h3>
                    <ul class="list-group">
                        <li class="list-group-item">My github username is <a href="https://github.com/${data.github}">${data.github}</a></li>
                        <li class="list-group-item"><a href="${data.linkedin}">Add me on Linkedin!</a></li>
                </div>
            </header>
        </body>
        </html>`
, (err)=>
err ? console.log(err) : console.log('success!')
)}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
      type: 'input',
      message: "Write a short bio.",
      name: 'bio',
    },
    {
        type: 'input',
        message: "What is your LinkedIn URL?",
        name: 'linkedin',
      },
      {
        type: 'input',
        message: "What is your GitHub URL?",
        name: 'github',
      }
  ])
  .then((data) => {
    makeFile(data)
  });