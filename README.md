# CRUD PostgreSQL REST API using Sequelize

This project implements a RESTful API with CRUD (Create, Read, Update, Delete) operations, utilizing PostgreSQL as the database and Sequelize as the ORM (Object-Relational Mapping) tool. The API is designed to manage resources stored in the PostgreSQL database, providing endpoints for creating, reading, updating, and deleting records.

## Features
- Create new records in the database
- Retrieve existing records from the database
- Update existing records in the database
- Delete records from the database

## Technologies Used
- Node.js: JavaScript runtime environment
- Express.js: Web application framework for Node.js
- Sequelize: Promise-based ORM for Node.js
- PostgreSQL: Open-source relational database
- dotenv: Module for loading environment variables from a .env file
- Other dependencies: bcrypt, jsonwebtoken, nodemon (for development)

## Getting started

1. Clone the repository: 
```
https://github.com/r-sarathi/postgres-rest-api.git
```
2. Install dependencies:
```
cd postgres-rest-api
npm install
```
3. Set up environment variables:

```
NODE_ENV = development
PORT = 3000

DB_USERNAME = your_database_username
DB_PASSWORD = your_database_password
DB_NAME = your_database_name
DB_HOST = localhost
DB_PORT = 5432

JWT_SECRET_KEY = your_secret_key
JWT_EXPIRES_IN = 1d

ADMIN_EMAIL = admin@example.com
ADMIN_PASSWORD = admin_password
```

4. Run the development server:
```
npm run start:dev
```

## Usage
The API endpoints can be accessed using HTTP requests. Here are some example requests:
* GET /api/posts: Retrieve all posts
* POST /api/posts: Create a new post
* GET /api/posts/:id: Retrieve a post by ID
* PUT /api/posts/:id: Update a post by ID
* DELETE /api/posts/:id: Delete a post by ID.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests for bug fixes, improvements, or new features.

## License
This project is licensed under the MIT License.
