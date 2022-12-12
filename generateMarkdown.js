// function that returns a license badge based on which license is passed in (or empty string if none)
function renderLicenseBadge(license) {
  if(!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// function that returns the license link in the badge
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit//`
  } if (license === 'GPLv3') {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  } if (license === 'ISC') {
    return `https://choosealicense.com/licenses/isc/`
  }
}

// function that returns the license section of README, or an empty string if none
function renderLicenseSection(license) {
  if (!license) {
    return ``;
    } else {
      return `## License
      This project is covered under the ${license} license. To learn more, click the badge at the top.`
    }
  }

// function to generate markdown copy for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}
        
  ## Description
  ${data.description} 
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, reach out to me at https://github.com/${data.username}, or shoot me an email at ${data.email}.
   `;       
}

// export of module for index
module.exports = generateMarkdown