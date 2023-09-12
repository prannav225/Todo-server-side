const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
mongoose.set("strictQuery", false);

const app = express();
const port = process.env.PORT || 5001;

// Establishing database connection using Mongoose
const dbURL = "mongodb://localhost:27017/todoApp";
mongoose.connect(dbURL).then(() => {
  console.log("Connected to Database");
});

// Create a Mongoose Model for To-Do Items
const Todo = mongoose.model("Todo", {
  task: String,
});

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Define API Endpoints

// Creating/Posting new To-Do
app.post("/todos", async (req, res) => {
  try {
    const duplicateTask = await Todo.findOne({ task: req.body.task }).exec();
    if (duplicateTask) {
      res.send({ message: "Task already exists, try adding another one!" });
      return;
    }
    let taskData = new Todo({
      task: req.body.task,
    });
    await taskData.save();
    res.status(200).send({ message: "Task added successfully" });
  } catch {
    res.status(500).send({ message: "Could not create a new To-Do" });
  }
});

// To Get all To-Do Items
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ tasks: todos });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch To-Do list" });
  }
});

// To Delete a To-Do
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete({ _id: id });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "Could not delete the To-Do" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
