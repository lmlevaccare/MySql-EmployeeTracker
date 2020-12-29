
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
  FOREIGN KEY (dept_id) REFERENCES department(id),
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
  FOREIGN KEY (manager_id) REFERENCES department(id),
  PRIMARY KEY (id)
);



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
VALUES ("Sales Associate", 65.000, 1);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("Software Engineer", 150.000, 2);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("Sr. Accountant", 120.000, 3);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("HR Manager", 85.000, 4);
INSERT into emp_roles (role_title, salary, dept_id)
VALUES ("Sales Manager", 90.000, 5);


select * from emp_roles;

-- employee data

INSERT into employee (first_name, last_name, role_id, manager_id)
values ("John", "Stamos", 1, 2); 
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Jim", "Baker", 2, 3);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("George", "Washington", 3, 4);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Meghan", "Kelly", 5, 5);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Tom", "Hanks", 1, 1);



INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES ("Jack", "Black ", 3, 2);

INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES ("Priya", "Thomas", 2, 3);


INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES ("Amy", "Langerman", 5, 4);
