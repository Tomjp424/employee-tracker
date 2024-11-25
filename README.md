# Employee Tracker
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
A lightweight and easy-to-use app that utilizes PostgreSQL for creating and maintaining a database of company employees, roles, and departments.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Installation
This instruction is going to assume that you are already familiar with PostgreSQL and have it installed. If not, follow this guide: https://coding-boot-camp.github.io/full-stack/postgresql/postgresql-installation-guide

To install the application, go to the Github Repository at https://github.com/Tomjp424/employee-tracker and either download it as a zip or clone it to your local machine.

Once installed, use the included `schema.sql` file to create your database, and the `seeds.sql` file if you would like to populate it with some test entries.

Once the database is created (and optionally seeded), you *must* create a file named `.env` within the root directory of the application and add three parameters to it:

DB_NAME=company_db

DB_USER=YourPostgresUsername

DB_PASSWORD=YourPostgresPassword

Once that is done, you're ready to launch the app!

## Usage
A video demonstrating the usage of the app can be found here: https://youtu.be/fl-JztfQRZo

To launch the app, open your terminal and navigate inside the root directory of the app. If it is your first time launching the app, you must first run `npm i` or `npm install` to ensure you install the required packages. Once that is done, you can lauch the app with `node app.js`.

Inside the app, you are given a list of options. You may view or create departments, roles, and employees. You can also update an employee's role.

Selecting `Show All _____` will prompt the creation of a table of all existing entities of that type.

Selecting `Add ______` will prompt you to enter information about the selected entity that you would like to add. Note: you cannot create an employee without having any existing roles, and you cannot create a role without having any existing departments.

Selecting `Update Employee` will prompt you to select an employee, and then select the role that you would like to change them too. This cannot be used if there are no employees in the database.

## Contributing
To contribute to the application, feel free to fork the repository and make any new additions or modifications you want.

## Testing
Testing is likely to involve creating a wide array of entities and ensuring that they only accept values of the relevant type for the prompted parameter, such as salary only accepting positive numbers with two decimal places.

## Questions
- GitHub: [Tomjp424](https://github.com/Tomjp424)
- Email: tomjp424@gmail.com

## License

Copyright (c) Thomas Phillips.

Licensed under the [MIT](https://opensource.org/licenses/MIT) license.