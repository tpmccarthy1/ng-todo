const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

// Get all tasks
router.get('/tasks', TaskController.getAll); 

// Create a task
router.post('/tasks', TaskController.create); 

// Complete a task 
// Create a task
router.put('/tasks', TaskController.complete); 

// Export as module
module.exports = router;