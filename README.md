# Backend TypeScript

## Description

Backend with **TypeScript**, **Express**, and **Sequelize**, connected to **PostgreSQL** on **Supabase**. Provides a scalable and secure RESTful API with **CRUD** operations, designed for easy environment configuration and database management.

## Features

- **CRUD** operations for managing users.
- **Environment variables** for easy configuration.
- **Supabase** for database hosting and management.
- **TypeScript** for type safety.
- **Sequelize** as an ORM to interact with the PostgreSQL database.
- **CORS** handling for cross-origin requests.
- **JWT authentication** for secure access.

## Installation

### Prerequisites

- Node.js (preferably the latest LTS version).
- PostgreSQL database (hosted on Supabase or locally).

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add the following environment variables:

    ```env
    DATABASE_URL='your-database-url'
    PORT='your-port'
    JWT_SECRET='your-secret-key'
    ```

4. Run the project:

    ```bash
    npm start
    ```

## Scripts

- `npm run start`: Compiles TypeScript and starts the server.
- `npm run dev`: Runs the server in development mode with `nodemon` for auto-reloading.
- `npm run build`: Compiles TypeScript into JavaScript.

## Routes

- **POST** `/person`: Create a new person.
- **GET** `/people`: Get all people.
- **GET** `/person/:id`: Get a person by ID.
- **PUT** `/person/:id`: Update a person by ID.
- **DELETE** `/person/:id`: Delete a person by ID.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
