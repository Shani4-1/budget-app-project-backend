# Personal Budgeting App - Backend

This is the backend REST API for a personal budgeting app, built with ExpressJS. The API provides endpoints to manage user accounts and transactions. The API is hosted on https://budget-app-backend-q5w3.onrender.com.


## Prerequisites
Before running the server, you must have the following installed on your machine:

Node.js
npm

# Installation

To install the dependencies, run:
```
npm install
```
## Dependencies
The following dependencies are required to run the project:

* Express

* Cors

* dotenv

To install the dependencies, run:

```
npm install express cors dotenv
```

## Running the Server

To start the server, run:

```
npm start
```

This will start the server on http://localhost:3000.

## API Endpoints
The following are the available endpoints of the API:

### Transaction Endpoints
* `GET /api/transactions/:userId` - Get all transactions for a user by ID
* `POST /api/transactions` - Add a new transaction
* `PUT /api/transactions/:transactionId` - Update a transaction by ID
* `DELETE /api/transactions/:transactionId` - Delete a transaction by ID

## Deployment
The API is deployed on https://budget-app-backend-q5w3.onrender.com.

## Frontend
The frontend of the personal budgeting app can be found in the following GitHub repository: https://github.com/Shani4-1/budget-app-project-frontend. The deployed site can be accessed at https://grand-gumption-4acad6.netlify.app/.
