# To-Do List Web App (Server-Side)

This repository contains the server-side code for a simple To-Do List web application built with Node.js and Express. This application serves as the backend API for managing tasks in the to-do list.

## Features

- **Create Tasks:** Receive and store new tasks in a MongoDB database.
- **Fetch Tasks:** Retrieve the list of tasks from the database.
- **Delete Tasks:** Delete tasks from the database.
- **Prevent Duplicates:** Prevent duplicate tasks with the same name from being added.

## Technologies Used

- **Node.js:** A JavaScript runtime for building server-side applications.
- **Express:** A web application framework for Node.js.
- **MongoDB:** A NoSQL database for storing tasks.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB.
- **Body-parser:** Middleware for parsing incoming JSON data.

## Getting Started

To get started with this server-side code, follow these steps:

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/prannav225/Todo-server-side/
2. Navigate to the project directory.
   ```bash
   cd todo-server
3. Install dependencies using npm.
   ```bash
   npm install
4. Start the server
   ```bash
   node server.js
   
## API Endpoints

- POST /todos: Create a new task.
- GET /todos: Fetch all tasks.
- DELETE /todos/:id: Delete a task by its ID.
  
## Environment Variables

MONGODB_URI: The connection URI for your MongoDB database.
 
## Contributing

Contributions are welcome! If you have any ideas, enhancements, or bug fixes, feel free to submit a pull request.

Author
Pranav M
