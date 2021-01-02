const DB = require('./sqlcom');
const cli = require('cli-table');

const mysql = require('mysql');
var inquirer = require("inquirer");
const consoletable = require("console.table");

const connection = require('./connection');
const { prompt } = require('inquirer');
// const {employee} =require('./sqlcom'); 
let team = [];

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View all Employees By Department?",
        "View all Employees By Manager?",
        "Add a New Employee?",
        "Remove Employee Role?"
        // "Update an Employee's Manager?"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all Employees By Department?":
          empByDeptV();
          break;

        case "View all Employees By Manager?":
          empByMangV();
          break;
      
        case "Add a New Employee":
          insertEmp();
          break;

        case "Remove Employee Role?":
          removeRole();
          break;
      }
    }
      // case  "Update an Employee's Manager?" :
      // updateEmp();
      // break;
          
    
    )
  }
     
  async function empByDeptV() {

    const employees = await DB.empRoles()
        
    console.table(employees);

    runSearch()

  }
    


  async function empByMangV() {

    const managers = await DB.mangRoles()
    console.table(managers);
    runSearch()

  }

function insertEmp() {

  inquirer.prompt({
      
    type: 'input',
    message: 'add new employee by first and last name?',
    name: 'newEmp',
  
  })
    .then(
      answer => {
        console.log("Inserting a new employee into data base...\n");
       employee = connection.query("INSERT INTO employee SET",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id || 3,
            manager_id: answer.manager_id || 2
         },
         team.push(answer.newEmp)
    

          
       );
         return this.connection.query(team)(`${this.first_name}
    ${this.last_name} ${this.role_id} ${this.manager_id}`);
      })
    


     empByDeptV()
  runSearch()
  console.log(team)
}
        
    

function removeRole() {
  

  inquirer.prompt({
      
    type: 'list',
    message: 'Which employee role_id would you like to delete?',
    name: 'role_id',
    choices: [1, 2, 3, 4, 5]
  
  })
    .then(
      function (anwsers) {

        if (anwsers.role_id === 1) {
          remove();

        }
        else {
          empByDeptV();
        }
      }
    
  )
 runSearch()

}
  runSearch()


  

   // const addNew ="INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ? ('first_name', 'last_name', 'manager', 'role_id', 'manager_id')";
      // [{
      //   type: 'input',
      //   message: 'Add Employee firstname, lastname, roleId(1-5), managerID(1-5).',
      //   name: 'new'
      // }]
    // inquirer.prompt(addNew)
    //   .then(
    //     anwsers => {
    //      employee=(anwsers.first_name, anwsers.last_name, anwsers.role_id, anwsers.manager_id)

//  inquirer.prompt(
//     [{
//       type: 'list',
//       message: 'Which employee would you like to add next?',
//       name: 'role',
//       choices: ['Jack', 'Priya', 'Amy', 'I do not want to add further employees']
//     }]

//       .then(
//         anwsers => {
                
//           if (anwsers.role === "Jack") {
//             DB.addEmpRole()
           
//           }
//           if (anwsers.role === "Priya") {
//             DB.addEmpRole()
           
                
//           }
                
//           if (anwsers.role === "Amy") {
//             DB.addEmpRole(employees)
           
                         
//           }
                  
//           else if (anwsers.role === "I do not want to add further employees") {
//             console.table(employees + newEmpsAdded);
                
                        
//           }
//           runSearch()
//         }
    
//       )


  
//  );
      

// function empByMangV() {
//   inquirer
//     .prompt({
//       name: "manager",
//       type: "input",
//       message: "View all Employees By Manager?"
//     })

//       .then(function (answer) {
     
//       var query = "SELECT * FROM employee INNER JOIN emp_roles ON employee.id=emp_roles.id";
        
//       connection.query(query, { manager: answer.manager },
//         function (err, res) {
//           for (var i = 0; i < res.length; i++) {
//             console.table(
//               "ManagerID: " + res[i].manager_id +
//               " || Employee Name: " +
//               res[i].first_name + " "+ res[i].last_name);
           
//           };
//             runSearch()
//         });
//     });
// }
// empByMangV ()
  
// function addEmp() {
//   inquirer
//     .prompt({
//       name: "addemp",
//       type: "input",
//       message: "Would you like to add a New Employee?",
//     })
//     .then(function (answer) {
//       console.log("Inserting a new employee into data base...\n");
//       var query = connection.query("INSERT INTO employee SET",
//         {
//           first_name: answer.first_name,
//           last_name: answer.last_name,
//           role_id: answer.role_id || 3,
//           manager_id: answer.manager_id || 2
//         },
//       );
//     })
// }
//         addEmp()
    
       
    
    //   console.log("Inserting a new product...\n");
    //   var query = connection.query(
    //     "INSERT INTO employee SET ?",
    //     {
    //       first_name: "Tom",
    //       last_name: "Ford",
    //       role_id: 3,
    //       manager_id: 2,
    //     },
    //     function (err, res) {
    //       if (err) throw err;
    //       console.log(res.affectedRows + " employee inserted!\n");
    //       // Call updateProduct AFTER the INSERT completes
    //       addEmp(answer);
    //     }
  
    //   );
    // });
      
      
      
      
      
  // logs the actual query being run

// }
        
//       connection.query(query, { addemp: answer.addemp },
//         function (err, res) {
//           for (var i = 0; i < res.length; i++) {
//             console.table(
//               "ManagerID: " + res[i].manager_id +
//               " || Employee Name: " +
//               res[i].first_name + " "+ res[i].last_name);
           
//           };

//         });
//     });
// }

  

//  connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].artist);
//     }
     
      // var query = "SELECT * FROM employee INNER JOIN emp_roles ON employee.id=emp_roles.id";
      // "SELECT first_name, last_name,role_id FROM employee";
      // "SELECT * FROM emp_DB.employee, emp_DB.emp_roles";
        


