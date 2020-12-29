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


class AddEmployee extends DB {
    constructor(connection, firstName = "", lastName = "", roleId = 0, managerId = 0) {
        super(connection);
        this.first_name = firstName;
        this.last_name = lastName;
        this.role_id = roleId;
        this.manager_id = managerId;
    }

    addEmpRole(firstName = this.first_name, lastName = this.last_name, roleId = this.role_id, managerId = this.manager_id) {
        this.connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [firstName, lastName, roleId, managerId],
            function (err, res) {
                if (err) console.log(err);
            }
        );
        return this.connection.query(this.addEmpRole)
    }
}


module.exports = typeof AddEmployee | DB;
        

    


module.exports = new DB(connection);     

 
//     