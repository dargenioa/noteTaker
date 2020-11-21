# noteTaker ![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)

  ## Table of Contents
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [License](#license)
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Questions](#questions)

  ## Description

  The noteTaker application is an efficient way to write, save and delete notes.  It allowe the user to create a note with a title and description and save it to the application.  It will also allow the user to delete the note when it is no longer needed.

  ## Video Demo

  ![](./utils/readmeGenerator.gif)


  ## Installation

  To install this application the user must have node.js installed.  The node depencies that are required are path, file system express using Router and uuidv4.

 <img src="./utils/Screen Shot 2020-11-14 at 5.33.19 PM.png" alt="node-packages">

  ## Usage

  To get started with the application, run ```node index.js``` in the terminal.  Once the user hits enter, they will be asked a series of questions relating to the table of contents in the application.  The user has an option of choosing a license which will dynamically add a badge near the title and a notice with a link to the detailed license in the License section.  When the file is created, the user will be able to update the README.md file with any videos, screenshots or other important information.

  ## License

  [The Unlicense](http://unlicense.org/)

  This project is licensed under [The Unlicense](http://unlicense.org/).  Please visit the link for more details.


  ## Contributing

  There were no contributors on this project, but collaboration is welcome.  Please feel free to reach out to me regarding changes to the application by creating an issue in Github or contacting me through email.

  ## Tests
  
  This application was created with asynchronuous JavaScript.  The getUserInput and writeFileSync are within a try/catch block.  If a file is successfully created then 'Sucessfully wrote to README.md' will log to the console.  Otherwise, the error will be logged to the console.

  ## Questions

  **Github:** [dargenioa](http://github.com/dargenioa)

  **Email:** [dargenioa14@gmail.com](dargenioa14@gmail.com)

  For additional questions please feel free to contact me.


