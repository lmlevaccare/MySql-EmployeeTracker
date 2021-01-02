

const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection
  
  
    }

       empRoles() {
    
        var query1 = "SELECT employee.first_name, emp_roles.role_title FROM employee LEFT JOIN emp_roles ON employee.role_id=emp_roles.id";

        return this.connection.query(query1)

    }
    
    mangRoles() {
        var query2 = "SELECT * FROM department INNER JOIN emp_roles ON department.id=emp_roles.id";
           
        return this.connection.query(query2)
    }




}
class Employee extends DB {
    constructor(connection, firstName = "", lastName = "", roleId = 0, managerId = 0) {
        super(connection)
        // this.connection = connection;
        this.first_name = firstName;
        this.last_name = lastName;
        this.role_id = roleId;
        this.manager_id = managerId;
    }

    addEmployee() {
        employee = new Employee("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)");
        return this.connection(employee)(`${this.first_name}
    ${this.last_name} ${this.role_id} ${this.manager_id}`);
    }
    

 deleteRoles() {
    console.log("Deleting Role ID 1..\n");
    let query =
        ("DELETE FROM emp_roles WHERE ?",
        {
            role_id: 1
        });
     
     return this.connection.deleteRoles((query));
        
}

}   


    




module.exports = typeof Employee | DB;
        

    


module.exports = new DB(connection);     

// var employee1 = new Employee("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)");
   


       
// var employee1 = new Employee("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (Victoria, Beckham, 2, 4)");




// class AddEmployee extends DB {
//     constructor(connection, firstName = "", lastName = "", roleId = 0, managerId = 0) {
//         super(connection);
//         this.first_name = firstName;
//         this.last_name = lastName;
//         this.role_id = roleId;
//         this.manager_id = managerId;
//     }

//     addEmpRole(firstName = this.first_name, lastName = this.last_name, roleId = this.role_id, managerId = this.manager_id) {
//         this.connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [firstName, lastName, roleId, managerId],
//             function (err, res) {
//                 if (err) console.log(err);
//             }
//         );
//         return this.connection.query(this.addEmpRole)
//     }



