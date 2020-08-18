// TODO: Write code to define and export the Employee class
// class Employee {
//     constructor(name, strength, hitPoints)

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your manager's name?",
  },
  {
    type: "input",
    name: "role",
    message: "What is your role?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your manager's email",
  },
  {
    type: "input",
    name: "id",
    message: "What is your manager's ID",
  },
  {
    type: "list",
    name: "employeeType",
    message: "Which type of team member would you like to add?",
    choices: [`Manager``Engineer`, `Intern`],
  },

  // function to write README file
  //   function writeToFile(README, data) {}
];
