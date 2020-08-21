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
    type: "list",
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

// PROMPT CREATES MANAGER INFO FROM INPUT
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
// PROMPT CREATES ENGINEER INFO FROM INPUT
const newEngineer = () => {
  inquirer.prompt(engineerInfo).then((data) => {
    const engineer = new Engineer(data.name, data.email, data.id, data.github);
    team.push(engineer);
    createTeam();
  });
};
// PROMPT CREATES INTERN INFO FROM INPUT
const newIntern = () => {
  inquirer.prompt(internInfo).then((data) => {
    const intern = new Intern(data.name, data.email, data.id, data.school);
    team.push(intern);
    createTeam();
  });
};

// FUNCTION SENDS USER INPUT TO HTML PAGE
function teamSummary() {
  fs.writeFileSync(outputPath, render(team), "utf-8");
}

createTeam();
