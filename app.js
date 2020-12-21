// const express = require('express');
// const PORT = process.env.PORT || 5000;
// const app = express();
// app.listen(PORT, () => console.log(`server started ${PORT}`));



const mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password1",
  database: "emp_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});
// const employeeOptions = [
//     "John Stamos",
//     "Mary Walters",
//     "George Washington",
//     "Meghan Kelly",
//     "Tom Hanks",
//     "Dolly Parton",
//     "Oprah Winfrey",
//     "exit"
// ];


function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View all Employees By Department?",
        "View all Employees By Manager?",
        "Add Employee?",
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

        case "Add Employee?":
        addEmp();
        break;

        case  "Remove Employee?" :
        removeEmp();
        break;
          
        case  "Update an Employee's Manager?" :
        updateEmp();
        break;
          
          
      }
    });
}

function empByDeptV() {
  inquirer
    .prompt({
      name: "employer",
      type: "input",
      message: "View all Employees By Department?"
    })

    .then(function (answer) {
     
      var query = "SELECT * FROM employee INNER JOIN emp_roles ON employee.id=emp_roles.id";
        
      connection.query(query, { employer: answer.employer },
        function (err, res) {
          for (var i = 0; i < res.length; i++) {
            console.table(
              "Department: " + res[i].role_title +
              " || Employee Name: " +
              res[i].first_name + " "+ res[i].last_name);
           
          };

        });
    });
}
    
empByDeptV()

// function empByDeptV() {
//   inquirer
//     .prompt({
//       name: "employer",
//       type: "input",
//       message: "?"
//     })


//  connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].artist);
//     }
     
      // var query = "SELECT * FROM employee INNER JOIN emp_roles ON employee.id=emp_roles.id";
      // "SELECT first_name, last_name,role_id FROM employee";
      // "SELECT * FROM emp_DB.employee, emp_DB.emp_roles";
        


// "role:" + res.role_title + "|| first-name: " + res.first_name + " || last-name:" + res.last_name);