const DB = require('./sqlcom');
const cli = require('cli-table');

const mysql = require('mysql');
var inquirer = require("inquirer");
const consoletable = require("console.table");

const connection = require('./connection');
const { prompt } = require('inquirer');
const express = require('express');

let team = [];

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View all Employees By Department?",
        "View all Departments and Roles, and Saleries?",
        "Add a New Employee, Role or Department?",
        "Remove Employee Role?",
        "Exit Application?"
      
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all Employees By Department?":
          empByDeptV();
          break;

        case "View all Departments and Roles, and Saleries?":
          allData();
          break;
      
        case "Add a New Employee, Role or Department?":
          addNew();
          break;

        case "Remove Employee Role?":
          removeRole();
          break;
      
        case "Exit Application?":
          exit();
          break;
      }
    });
    
  async function empByDeptV() {

    const employees = await DB.empRoles()
        
    console.table(employees);

    runSearch()

  }
  
  async function allData() {

    const managers = await DB.mangRoles()
    console.table(managers);
    runSearch()

  }

  

  function addNew() {
    inquirer
      .prompt([
        {
          name: "add",
          type: "checkbox",
          message: "You would like to add a new Employee, Role, or Department?",
          choices: [
            {
              name: "Add Employee",
            },
            {
              name: "Add Role",
            },
            {
              name: "Add Department",
            },
          ]
        }
      ])
      .then(function (answer) {
        console.log(answer)
        switch (answer.add) {
          case "Add Employee":
            addingEmployee();
            break;
          
          case "Add Role":
            addRole();
            break;

          case "Add Department":
            addDept();
            break;


        }

      });
  }

  function addingEmployee() {
    inquirer.prompt([
      {
     
        name: "first_name",
        type: "input",
        message: "Please add the Employee's First Name?",
      
      },
      {
        name: "last_name",
        type: "input",
        message: "Please add the Employee's last name",
      },
      {
        name: "role_id",
        type: "input",
        message: "Please add the Employee's corresponding Role ID (1-5). If this Employee's role is not present in current data-base please create a new Role ID for Employee."

      }
    ])
 
      .then(
        answer => {
        query3 =
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id
          };

          query3.forEach(function (answer) {
            console.log(answer.first_name, answer.last_name, answer.role_id);
            team.push(answer.first_name, answer.last_name, answer.role_id);
            

          });
          
          let updateNew = DB.addNewEmp();
          console.table(updateNew)
          runSearch()
     

        })
        
  }
 

  function addRole() {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Please add the job title",

        },
        {
          name: "salary",
          type: "input",
          message: "Please add the salary",
        },
        {
          name: "department_id",
          type: "input",
          message: "Please add the department id for this title",

        },

      ])

      .then(function (answer) {
        mysql = connection.query(
          "INSERT INTO role SET ?",
          {
            role_title: answer.role_title,
            salary: answer.salary,
            dept_id: answer.dept_id,
          }
        )
      })
  }

  function addDept() {
    inquirer
      .prompt([
        {
          name: "departmentName",
          type: "input",
          message: "Please add the department name?"
        }
      ])
      .then(function (answer) {
        mysql = connection.query(
          "INSERT INTO department SET ?",
          {
            dpt_name: answer.dpt_name,
          }
        )
      })
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
}

  runSearch()


  

        


