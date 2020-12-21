
DROP DATABASE IF EXISTS emp_DB;
CREATE database emp_DB;

USE emp_DB;
-- department table-COMPLETE
CREATE TABLE department (
  id INTEGER AUTO_INCREMENT NOT NULL,
  dpt_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- roles table 
CREATE TABLE emp_roles (
  id INTEGER AUTO_INCREMENT NOT NULL,
  role_title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NOT NULL,
  dept_id INTEGER NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES employee(id),
  PRIMARY KEY (id)
);

-- employee table
CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  FOREIGN KEY (role_id) REFERENCES emp_roles(id),
  manager_id INTEGER NULL,
  FOREIGN KEY (manager_id) REFERENCES employee(id),
  PRIMARY KEY (id)
);

-- SEED DATA

select * from employee;
select * from emp_roles;
select * from department;

-- department data

INSERT into department (dpt_name)
VALUES ("Sales");
INSERT into department (dpt_name)
VALUES ("Engineering");
INSERT into department (dpt_name)
VALUES ("Finance");
INSERT into department (dpt_name)
VALUES ("Legal");
INSERT into department (dpt_name)
VALUES ("Manager");

select * from department;

-- roles data


INSERT into emp_roles (role_title , salary, dept_id)
VALUES ("Sales Lead", 45.000, 1);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("Salesperson", 35.000, 2);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("Lead Engineer", 43.000, 3);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("Accountant", 50.000, 4);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("Legal", 50.000, 5);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("Director", 65.000, 6);

select * from emp_roles;

-- employee data

INSERT into employee (first_name, last_name, role_id, manager_id)
values ("John", "Stamos", 4, NULL); 
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Jim", "Baker", 4, NULL);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("George", "Washington", 6, 2);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Meghan", "Kelly", 3, NULL);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Tom", "Hanks", 4, NULL);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Dolly", "Parton", 4, 2);

select * from employee;


-- NOTES on FK ID
-- constraint fk_department_id foreign key (department_id) references department(id)
  
  -- manager_id - INT to hold reference to another employee that manages the employee 
  -- being Created. This field may be null if the employee has no manager


