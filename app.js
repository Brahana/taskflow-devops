require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");

const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;
const filePath = path.join(__dirname, "data", "tasks.json");

// Configure EJS
app.set("view engine", "ejs");

// Home Route
app.get("/", (req, res) => {

    const tasks = JSON.parse(fs.readFileSync(filePath));

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(task => task.status === "Completed").length;

    const pendingTasks = tasks.filter(task => task.status === "Pending").length;

    res.render("index", {

        totalTasks,
        completedTasks,
        pendingTasks

    });

});

// Health Check Endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: process.env.APP_NAME,
        version: process.env.APP_VERSION
    });
});
app.use("/tasks", taskRoutes);
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});