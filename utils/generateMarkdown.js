const licenseLinksArray = [
  "(https://opensource.org/licenses/MIT)",
  "(http://unlicense.org/)",
  "(https://opensource.org/licenses/Apache-2.0)",
  "(https://www.gnu.org/licenses/gpl-3.0)",
  "(https://opensource.org/licenses/BSD-3-Clause)",
  "(https://opensource.org/licenses/MPL-2.0)"
];

const licenseBadgeArray = [
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]",
  "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]",
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let empty = "";
  switch(license) {
    case 'MIT':
      empty = licenseBadgeArray[0];
      break;
    case 'Unlicense':
      empty = licenseBadgeArray[1];
      break;
    case 'Apache 2.0':
      empty = licenseBadgeArray[2];
      break;
    case 'GNU v3':
      empty = licenseBadgeArray[3];
      break;
    case 'BSD 3-Clause':
      empty =licenseBadgeArray[4];
      break;
    case 'Mozilla Public License 2.0':
      empty = licenseBadgeArray[5];
      break;
    default:
      empty = " ";
  }
  return empty;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let empty = "";
  switch(license) {
    case 'MIT':
      empty = licenseLinksArray[0];
      break;
    case 'Unlicense':
      empty = licenseLinksArray[1];
      break;
    case 'Apache 2.0':
      empty = licenseLinksArray[2];
      break;
    case 'GNU v3':
      empty = licenseLinksArray[3];
      break;
    case 'BSD 3-Clause':
      empty = licenseLinksArray[4];
      break;
    case 'Mozilla Public License 2.0':
      empty = licenseLinksArray[5];
      break;
    default:
      empty = " ";
  }
  return empty;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
 
  
  return `# ${data.title}

      ${renderLicenseBadge(data.license[0])}

      link to repository : https://github.com/pfotis/readMe-Generator

      ## Description

      ${data.description}

      ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation

    To install dependencies, run the following:

    ${data.install}

    
    ## Usage

    ${data.usage}

    ## License

    This repository is licensed under the ${data.license[0]}.
    ${renderLicenseLink(data.license[0])}

    ## Contributing

    ${data.contribute}

    ## Tests

    To run tests, run the following:

    ${data.test}

    ## Questions

    Questions about this repository? Please contact me at ${data.email}(mailto:${data.email}).
    View my work in GitHub ${data.github}(https://github.com/${data.github}).
  `;
}

module.exports =generateMarkdown;