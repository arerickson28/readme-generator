// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case "none" :
      return ""
      break;

    case "Apache 2.0 License" :
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      break

    case "The MIT License" :
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break

    case "Boost Software License 1.0" :
      return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)"
      break

    case "Eclipse Public Licesne 1.0" :
      return "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)"
      break 
  }
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "none" :
      return ""
      break;

    case "Apache 2.0 License" :
      return "(https://opensource.org/licenses/Apache-2.0)"
      break

    case "The MIT License" :
      return "(https://opensource.org/licenses/MIT)"
      break

    case "Boost Software License 1.0" :
      return "(https://www.boost.org/LICENSE_1_0.txt)"
      break

    case "Eclipse Public Licesne 1.0" :
      return "(https://opensource.org/licenses/EPL-1.0)"
      break 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `### Licensing: 
  ${renderLicenseBadge(license)}  
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  let title = response.title ;
  let purpose = response.purpose ;
  let license = response.license ;
  let usage = response.usage ;
  let username = response.userName ;

  let readMe = `# Title Of App  
  ${title}
  
  #### Created By:
  ${username}
  
  ## Purpose of application  
  ${purpose}
  
  ## How to run application 
  ${usage}
  
  ${renderLicenseSection(license)}`

  return readMe ;
}

module.exports = generateMarkdown;
