function generateMarkdown(data) {
  return `
# Name of User is: ${data.username}
\
# Title of Project: ${data.projectTitle}
\
# Detail Description: ${data.projectDescription}
\
# Steps required to install project: ${data.installationProcess}
\
# Instructions for Use: ${data.instruction}
\
# Example Instructions: ${data.instructionExample}
\
# License Name: ${data.licenseName}
\
# License URL: ${data.licenseUrl}
\
# Contributor GitHub Usernames: ${data.contributorsGitUserName}
\
# Examples on how to run tests: ${data.tests}
\
# Questions: ${data.questionsFromUser}
`;
}

module.exports = generateMarkdown;
