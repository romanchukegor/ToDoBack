const express = require('express')
const router = express.Router()

const {
    createNewTask,
    getAllTasks,
    deleteTask,
    deleteAllTasks,
    changeTaskInfo,
    changeCheckBoxTask
} = require('../controllers/task.controller')

router.get('/tasks', getAllTasks);
router.post('/tasks', createNewTask);
router.patch('/tasks/:_id/text', changeTaskInfo);
router.patch('/tasks/:_id/isCheck', changeCheckBoxTask);
router.delete('/tasks/:_id', deleteTask);
router.delete('/tasks', deleteAllTasks);

module.exports = router