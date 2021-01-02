const mysql = require('mysql');
// var inquirer = require("inquirer");
// const consoletable = require("console.table");
const util = require("util");

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

});

connection.query=util.promisify(connection.query)
module.exports=connection 
