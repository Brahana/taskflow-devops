const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

// Route to display Add Task page
router.get("/", taskController.getTasks);
router.get("/add", taskController.showAddTask);

router.post("/add", taskController.addTask);
router.get("/edit/:id", taskController.showEditTask);
router.post("/edit/:id", taskController.updateTask);

router.post("/delete/:id", taskController.deleteTask);


module.exports = router;