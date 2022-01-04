const express = require('express');
const router = express.Router();


const { 
        addTodo,
        getTodo,
        getTodoById,
        updateTodo,
        deleteTodo,
        changeStatus
 } = require('../controller/todoController');


router.route('/newtodo').post(addTodo);
router.route('/gettodo').get(getTodo);
router.route('/gettodo/:id').get(getTodoById);
router.route('/updatetodo/:id').put(updateTodo);
router.route('/deletetodo/:id').delete(deleteTodo);
router.route('/changestatus/:id').put(changeStatus);



module.exports = router;