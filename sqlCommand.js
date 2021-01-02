const inquirer = require("inquirer");
const connection = require("./connection");

 class DB {
   constructor(connection) {
        this.connection = connection
  
  
   }

   empRoles() {
    
        var query = "SELECT employee.first_name, emp_roles.role_title FROM employee LEFT JOIN emp_roles ON employee.role_id=emp_roles.id";

        return this.connection.query(query)

    }
    
    mangRoles() {
        var query2 = "SELECT * FROM department INNER JOIN emp_roles ON department.id=emp_roles.id";
           
        return this.connection.query(query2)
    }
}

class Employee extends DB {
    constructor(connection, firstName = "", lastName = "", roleId = 0, managerId = 0) {
        super(connection)
        this.connection = connection;
        this.first_name = firstName;
        this.last_name = lastName;
        this.role_id = roleId;
        this.manager_id = managerId;
        this.addEmployee = function () {
            return this.connection`${this.first_name}
    ${this.last_name} ${this.role_id} ${this.manager_id}`
        }
    }
}       
       
var employee = new Employee("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)"

);
 
console.log(employee.Employee);
   

//  module.exports = typeof Employee | DB;
        
            
    
    



module.exports = new DB(connection);    