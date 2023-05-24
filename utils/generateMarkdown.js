// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

renderLicenseBadge = (license) => license == 'None' ? '' : `![alt text](https://img.shields.io/badge/licence-${license}-blue)`;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

---

## Table Of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

---

## Installation

To install the required dependencies, just run this code: 

\`\`\`
${data.installation}
\`\`\`

---

## Usage

${data.usage}

---

## License

This Project is licenced under ${data.license} license.

---

## Contributing

${data.contribution}

---

## Tests

To run tests, just run the following command:

\`\`\`
${data.test}
\`\`\`

--- 

## Questions

You can find more about my work at my Github [${data.username}](https://github.com/${data.username}).
If you have any questions you can reach me at [${data.email}](mailto:${data.email}).

`;
}

module.exports = {generateMarkdown};
