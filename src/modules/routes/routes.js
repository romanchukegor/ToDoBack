const express = require('express')
const router = express.Router()
const {taskValidator, validate} = require('../../validator/validator')

const {
    createNewTask,
    getAllTasks,
    deleteTask,
    deleteAllTasks,
    changeTaskInfo,
    changeCheckBoxTask
} = require('../controllers/task.controller')

router.get('/tasks', getAllTasks);
router.post('/tasks', taskValidator, validate, createNewTask);
router.patch('/tasks/:_id/text', taskValidator, validate, changeTaskInfo);
router.patch('/tasks/:_id/is-check', changeCheckBoxTask);
router.delete('/tasks/:_id', deleteTask);
router.delete('/tasks', deleteAllTasks);

module.exports = router