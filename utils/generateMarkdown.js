// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return ``;
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Mozilla Public License') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Apache 2.0') {
    return ` [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'BSD 3') {
    return ` [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'BSD 2') {
    return ` [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === '') {
    return '';
  } else if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === 'Mozilla Public License') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Apache 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'BSD 3') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'BSD 2') {
    return `(https://opensource.org/licenses/BSD-2-Clause)`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  }
  return `This project is licensed under the ${license} license. For more details, see the license link: ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.gettingStarted}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
##### For any questions regarding this project, contact the project owner via: 
  GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  Email: ${data.email}
  `;
};

export default generateMarkdown;
