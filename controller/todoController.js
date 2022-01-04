const todoModel = require('../model/todo');

exports.addTodo = async (req, res, next) => {

    const { todo , detail } = req.body;

    const newtodo = await todoModel.create({
        todo,
        detail
    })
    res.status(201).json({
        success: true,
        newtodo
    })
}

exports.getTodo = async (req, res, next) => {
    const todos = await todoModel.find();

    res.status(200).json({
        success: true,
        count: todos.length,
        todos
    })
}

exports.getTodoById = async (req, res, next) => {
    const { id } = req.params;

    const todo = await todoModel.findById(id);
    if(!todo){
        res.stauts(400).json({
            success: false,
            message: `Cannot find todo by id ${id}`
        })
    }

    res.status(200).json({
        success:true,
        todo
    })

}

exports.updateTodo = async (req, res, next) => {
    const { id } = req.params;
    let updateContent = req.body;
    let todo = await todoModel.findById(id);
    if(!todo){
        res.stauts(400).json({
            success: false,
            message: `Cannot find todo by id ${id}`
        })
    }

    todo = await todoModel.findByIdAndUpdate(id, updateContent, {
        new: true,
        runValidators: true
    })
    todo.set({updatedAt : Date.now()})

    res.status(201).json({
        success: true,
        todo
    })
}

exports.deleteTodo = async (req, res, next) => {
    const { id } = req.params;
    let todo = await todoModel.findById(id);

    if(!todo){
        res.stauts(400).json({
            success: false,
            message: `Cannot find todo by id ${id}`
        })
    }
    todo = await todoModel.findByIdAndDelete(id);

    res.status(200).json({
        success: true
    })
}

exports.changeStatus = async (req,res,next) => {
    const { id } = req.params;

    let todo = await todoModel.findById(id);

    if(!todo){
        res.stauts(400).json({
            success: false,
            message: `Cannot find todo by id ${id}`
        })
    }

    todo.complete = !todo.complete;
    todo.save();
    res.status(200).json({
        success: true,
        todo
    })

}