const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

// Show all tasks
exports.getTasks = (req, res) => {

    const search = req.query.search || "";

    let tasks = JSON.parse(fs.readFileSync(filePath));

    if (search) {

        tasks = tasks.filter(task =>
            task.title.toLowerCase().includes(search.toLowerCase())
        );

    }

    res.render("tasks", {
        tasks,
        search
    });

};

// Show Add Task page
exports.showAddTask = (req, res) => {

    res.render("addTask");

};

// Save Task
exports.addTask = (req, res) => {

    const tasks = JSON.parse(fs.readFileSync(filePath));

    const newTask = {

        id: Date.now(),

        title: req.body.title,

        description: req.body.description,

        priority: req.body.priority,

        status: req.body.status

    };

    tasks.push(newTask);

    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

    res.redirect("/tasks");

};

// Show Edit Task page
exports.showEditTask = (req, res) => {

    const taskId = Number(req.params.id);

    const tasks = JSON.parse(fs.readFileSync(filePath));

    const task = tasks.find(task => task.id === taskId);

    res.render("editTask", { task });

};

// Update Task
exports.updateTask = (req, res) => {

    const taskId = Number(req.params.id);

    let tasks = JSON.parse(fs.readFileSync(filePath));

    const task = tasks.find(task => task.id === taskId);

    task.title = req.body.title;
    task.description = req.body.description;
    task.priority = req.body.priority;
    task.status = req.body.status;

    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

    res.redirect("/tasks");

};
// Delete Task
exports.deleteTask = (req, res) => {

    const taskId = Number(req.params.id);

    let tasks = JSON.parse(fs.readFileSync(filePath));

    tasks = tasks.filter(task => task.id !== taskId);

    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

    res.redirect("/tasks");

};
