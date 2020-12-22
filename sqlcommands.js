const connection = require("./connection");
newEmployee=[]
class DB {
    constructor(connection) {
        this.connection=connection
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
        var query3 = "ALTER TABLE employee ADD new_Employee varchar(100)";
           
        return this.connection.query(query3)
    }
    
};
 



module.exports=new DB(connection)