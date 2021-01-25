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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${data.name}</h1>
    <p class="lead">I am from ${data.stack}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${data.email}</li>
      <li class="list-group-item">LinkedIn: --- ${renderLicenseBadge(data.license[0])}---${renderLicenseLink(data.license[0])}--</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

module.exports =generateMarkdown;