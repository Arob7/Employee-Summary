// CLASSES
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// MODULES
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//HTML TEMPLATES
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let team = [];

// ADD EMPLOYEE TYPE
const employee = [
  {
    type: "checkbox",
    name: "employeeType",
    message: "Which type of employee would you like to add?",
    choices: ["Manager", "Engineer", "Intern", "None"],
  },
];

// MANAGER QUESTIONS
const managerInfo = [
  {
    type: "input",
    name: "name",
    message: "What is manager's name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is manager's email?",
  },
  {
    type: "input",
    name: "id",
    message: "What is manager's ID?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is manager's office number?",
  },
];

// ENGINEER QUESTIONS
const engineerInfo = [
  {
    type: "input",
    name: "name",
    message: "What is engineer's name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is engineer's email?",
  },
  {
    type: "input",
    name: "id",
    message: "What is engineer's ID?",
  },
  {
    type: "input",
    name: "github",
    message: "What is their Github username?",
  },
];

// INTERN QUESTIONS
const internInfo = [
  {
    type: "input",
    name: "name",
    message: "What is intern's name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is intern's email?",
  },
  {
    type: "input",
    name: "id",
    message: "What is intern's ID?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the name of their school?",
  },
];

// PROMPT FOR EMPLOYEE CHOICES
function createTeam() {
  inquirer.prompt(employee).then((data) => {
    switch (data.employee) {
      case "Manager":
        newManager();
        break;
      case "Engineer":
        newEngineer();
        break;
      case "Intern":
        newIntern();
        break;
      default:
        teamSummary();
        break;
    }
  });
}

// MANAGER INFO PROMPT
const newManager = () => {
  inquirer.prompt(managerInfo).then((data) => {
    const manager = new Manager(
      data.name,
      data.email,
      data.id,
      data.officeNumber
    );
    team.push(manager);
    createTeam();
  });
};
// ENGINEER INFO PROMPT
const newEngineer = () => {
  inquirer.prompt(engineerInfo).then((data) => {
    const engineer = new Engineer(data.name, data.email, data.id, data.github);
    team.push(engineer);
    createTeam();
  });
};
// INTERN INFO PROMPT
const newIntern = () => {
  inquirer.prompt(internInfo).then((data) => {
    const intern = new Intern(data.name, data.email, data.id, data.school);
    team.push(intern);
    createTeam();
  });
};

// render();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
