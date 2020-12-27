// const express = require('express');
// const PORT = process.env.PORT || 5000;
// const app = express();
// app.listen(PORT, () => console.log(`server started ${PORT}`));
const DB = require('./sqlcommands');


const mysql = require('mysql');
var inquirer = require("inquirer");
const consoletable = require("console.table");

const connection = require('./connection');



function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View all Employees By Department?",
        "View all Employees By Manager?",
        "Would you like to add a New Employee?",
        "Remove Employee?",
        "Update an Employee's Manager?"
      ]
    })
    .then(function(answer) {
        switch (answer.action) {
        case "View all Employees By Department?":
        empByDeptV();
        break;

        case "View all Employees By Manager?":
        empByMangV();
        break;

        case "Would you like to add a New Employee":
        addEmp();
        // break;

        case  "Remove Employee?" :
        removeEmp();
        break;
          
        // case  "Update an Employee's Manager?" :
        // updateEmp();
        // break;
          
          
      }
    });
}
 async function empByDeptV() {

  const employees= await DB.empRoles()
        
  console.table(employees);

  runSearch()

}
    
  // runSearch()

 async function empByMangV() {

  const managers= await DB.mangRoles()
        
  console.table(managers);

  runSearch()

 }
// async function addEmp() {

//   const addingEmpRole = await DB.addEmpRole() 
//   let newEmployee = []

// for (let i = 0; i < newEmployee.length; i++) {
//     if (newEmployee[i]) {
      
//       addingEmpRole.push(newEmployee[i]);
       
//     }
  
//     console.table(addingEmpRole);

//     runSearch()
     
   
//   }

// };

// let greeting =[]
// names.forEach(name => { return greeting.push(name)
// })
    
  runSearch()





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
        


