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

    addEmpRole() {
        var query3 = "INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ? ('first_name', 'last_name', 'manager', 'role_id', 'manager_id')";
                   
        return this.connection.query(query3)
     
    }
}
           module.exports = new DB(connection)     
   
 


    //     removeRoles() {
    //     var query4 = "SELECT * FROM department INNER JOIN emp_roles ON department.id=emp_roles.id";
           
    //     return this.connection.query(query4)
    // }
    
 
    





//  var newEmpsAdded = [
//             ['Jack', 'Black', 3, 2],
//             ['Priya', 'Thomas', 2, 3],
//             ['Amy', 'Langerman', 5, 4]
//         ];
      
//         newEmpsAdded = "INSERT INTO employee SET ?";
  

//             console.log(res.affectedRows + " employee added!\n");
//     