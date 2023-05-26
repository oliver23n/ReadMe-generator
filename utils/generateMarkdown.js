//create the badge image
renderLicenseBadge = (license) => license == 'None' ? '' : `![alt badge](https://img.shields.io/badge/licence-${license}-blue)`;

//creates the link for the corresponding license
function renderLicenseLink(license) {
   switch(license){
    case 'None':
      return '';
    case 'MIT':
       return 'https://opensource.org/license/mit/';
    case 'Apache 2.0':
       return  'https://www.apache.org/licenses/LICENSE-2.0';
    case 'GNU v3':
       return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'BSD 2':
       return 'https://opensource.org/license/bsd-2-clause/';
    case 'BSD 3':
       return 'https://opensource.org/license/bsd-3-clause/';
    case 'Mozzila Public Licence':
       return 'https://www.mozilla.org/en-US/MPL/';

   }    

}
//fills the license section of the README 
function renderLicenseSection(license) {
  return license == 'None' ? '' : `This Project is licenced under ${license} license.`
}
function generateMarkdown(data) {
  return `# ${data.title}

[${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

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

${renderLicenseSection(data.license)}

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

module.exports = generateMarkdown;
