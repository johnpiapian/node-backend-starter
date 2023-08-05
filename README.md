# Node.js Express Prisma Starter Template

![Node.js](https://img.shields.io/badge/Node.js-v18.16.0-green.svg)
![Express](https://img.shields.io/badge/Express-v4.17.1-blue.svg)
![Prisma](https://img.shields.io/badge/Prisma-v5.1.0-orange.svg)
![Jest](https://img.shields.io/badge/Jest-v29.6.2-red.svg)
![Docker](https://img.shields.io/badge/Docker-v20.10.8-blue.svg)
![JWT](https://img.shields.io/badge/JWT-v9.0.0-green.svg)
![Bcrypt](https://img.shields.io/badge/Bcrypt-v5.1.0-yellow.svg)

Welcome to the Node.js Express Prisma Starter Template! This repository serves as a solid foundation for building web applications using Node.js with Express for the server, Prisma as the database ORM, JWT for authentication, Bcrypt for password hashing, Jest for testing, and Docker for containerization.

## Features

- **Express Server**: Set up a powerful, minimalistic web server using Express.
- **Prisma ORM**: Integrate Prisma to communicate with the database easily.
- **Jest Testing**: Write and run tests using the Jest testing framework.
- **Docker Support**: Use Docker to containerize your application for easy deployment.
- **JWT Authentication**: Implement JSON Web Tokens (JWT) for secure authentication.
- **Bcrypt Password Hashing**: Safely hash and store user passwords using Bcrypt.

## Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (v14.17.3 or later)
- [npm](https://www.npmjs.com/) (v6.14.13 or later)
- [Docker](https://www.docker.com/) (v20.10.8 or later, for optional containerization)

## Getting Started

Follow these steps to get the project up and running:

1. Clone this repository to your local machine:
```bash
git clone https://github.com/johnpiapian/node-backend-template.git
```
2. Install the dependencies:
```bash
cd node-backend-starter && npm install
```
3. Manage Prisma
```bash
npm run db-migrate

npm run db-reset # recreate the database
```
4. Start the development server:
```bash
npm run dev
```
Your Node.js Express server should now be running on http://localhost:3000.


## Testing
To run the tests using Jest, use the following command:
```bash
npm run test
```

## Docker Support
To run the application using Docker, make sure you have Docker installed on your machine. Then, use the provided Dockerfile to build and run the container:
```bash
npm run docker-start

npm run docker-stop

npm run docker-delete # delete all images, volumes, and etc
```

## Authentication
This starter template includes a basic JWT authentication setup. However, it's recommended to further customize and enhance the authentication mechanism based on your specific requirements.

## Contributing
Contributions are welcome! If you find any issues or want to suggest improvements, feel free to open an issue or submit a pull request. Happy coding! If you have any questions or need further assistance, feel free to reach out. [Sut Tuang](https://suttuang.com/)

