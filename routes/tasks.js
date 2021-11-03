const express =require('express')
const router=express.Router();
const {getAllTasks,getTask,updateTask,deleteTask, createTask}=require('../controllers/tasks')
//setup the routes for non:id request
router.route('/').get(getAllTasks).post(createTask)
//setup the tasks for id request
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports=router