INSERT INTO department (name)
VALUES ('Engineering'),
       ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 80000.00, 1),
       ('Engineering Manager', 120000.00, 1),
       ('Content Marketing Specialist', 65000.00, 2),
       ('Marketing Manager', 90000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Big', 'Wig', 2, NULL),
       ('Paul', 'Marketing', 4, NULL),
       ('Joe', 'Shmoe', 1, 1),
       ('Sandy', 'Cheeks', 3, 2);