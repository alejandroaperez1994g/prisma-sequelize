# Backend Project using Express and Prisma

![Express Logo](https://expressjs.com/images/express-facebook-share.png)
![Prisma Logo](https://raw.githubusercontent.com/prisma/presskit/main/Assets/Preview-Prisma-LightLogo.png)

This is a backend project template built using Express.js and Prisma. It provides a foundation for developing web applications with a focus on scalability, robustness, and data management.

## Introduction

### Express
Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It provides a set of flexible features for building web applications and APIs. Express allows you to handle routes, middleware, and HTTP requests in a simple and intuitive way.

### Prisma
Prisma is an open-source database toolkit that simplifies database access for Node.js applications. It provides an Object-Relational Mapping (ORM) layer and a powerful query builder. Prisma supports multiple databases and offers features such as data modeling, schema migrations, and real-time data synchronization.

## Installation

To run this project, follow the instructions below:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd prisma-sequelize
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and set your environment variables, refer to the `.env.example` file:

    ```bash
    touch .env
    ```
5. Run the project:

   ```bash
   npm dev
   ```

   This command will transpile the TypeScript code and start the Express server.

6. Access the application in your browser at `http://localhost:8080` by default.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm test`: Run tests for the project.
- `npm start`: Start the production server.
- `npm run seed`: Run the database seed script.
- `npm run dev`: Start the development server with automatic restart on file changes.
- `npm run studio`: Open Prisma Studio, an interactive database GUI.

Feel free to explore and modify these scripts based on your project requirements.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

Enjoy building your Express and Prisma backend application! If you have any questions, feel free to reach out.

