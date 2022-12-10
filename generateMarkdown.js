// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
        
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
          
  ;
}

// export of module for index
module.exports = generateMarkdown;