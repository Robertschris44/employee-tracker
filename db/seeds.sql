INSERT INTO department (id, name)
VALUES
(1, 'Engineering'),
(2, 'Sales'),
(3, 'Legal'),
(4, 'Finance');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'Sales Lead', '140000', '2'),
(2, 'Lead Engineer', '170000', '1'),
(3, 'Accountant', '100000', '4'),
(4, 'Software Engineer', '90000', '1'),
(5, 'Lawyer', '200000', '3'),
(6, 'Legal Team Lead', '210000', '3'),
(7, 'Salesperson', '80000', '2'),
(8, 'Account Manager', '120000', '4');

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Christopher', 'Roberts', 4, NULL),
(2, 'Tracey', 'Cook', 8, 2),
(3, 'Dee', 'Cunningham', 3, 2),
(4, 'Monica', 'Ferguson', 6, 13),
(5, 'Trenae', 'Sanders', 7, NULL),
(6, 'Breonna', 'Chambers', 1, NULL),
(7, 'Spencer', 'James', 5, 4),
(8, 'Troy', 'Smith', 2, NULL),
(9, 'Yusuke', 'Urameshi', 1, NULL),
(10, 'Karina', 'Sampson', 6, NULL),
(11, 'Samantha', 'Rogers', 7, NULL),
(12, 'Amanda', 'Waller', 4, 8),
(13, 'Stacey', 'Gurtrue', 8, NULL),
(14, 'Ryan', 'Sanchez', 5, NULL),
(15, 'Ed', 'Reed', 3, NULL);
