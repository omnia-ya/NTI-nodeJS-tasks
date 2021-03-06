
const fs = require('fs')
const chalk = require('chalk')
//load tasks function
const loadTasks = ()=>{
    try{
        const tasks = JSON.parse(fs.readFileSync('tasks.json'))
        return tasks
    }
    catch(e){
        return []
    }
}
//save and write the tasks function
const saveTasks = (tasks)=>{
    fs.writeFileSync('tasks.json',JSON.stringify(tasks))
}
//add tasks function
const addTasks = (title,content)=>{
    //to load the tasks in this function
    //بجيب المصفوفة عندي هنا 
    const tasks = loadTasks()
    //to push the new values in the array
    //using obj key:value=>new value
    //بعمل شرط ان لو العنوان موجود قبل كدا مينفعش 
    //using 'find' to store the title that i want to add it
    const searchVal = tasks.find(task=>task.title == title)
    //if not found the title then add it normal
    if(!searchVal){
        tasks.push({
            title:title,
            content:content,
            status:false
        })
        //to write the new values in json file
        saveTasks(tasks)
        console.log(chalk.blue.inverse('task added succesfully'))
    }
    //if the title is exist then dont add it
    else{
        console.log(chalk.red.inverse('task title used before'))
    }    
}
//delete function
const deleteTask = (title) =>{
    const tasks = loadTasks()
    const tasksAfterDelete = tasks.filter(task=>task.title != title)
    if(tasks.length > tasksAfterDelete.length){
        saveTasks(tasksAfterDelete)
        console.log(chalk.red.inverse('task deleted'))
    }
    else{
        console.log(chalk.yellow.inverse('task not found'))

    }
}
//edit function
const editTask = (title,newTitle)=> {
    const tasks = loadTasks()
    let index = tasks.findIndex(task=>task.title == title)
    if(index == -1){
        console.log(chalk.red.inverse('task not found'))
    }
    else{
        tasks[index] = {
            title:newTitle
        }
        saveTasks(tasks)
        console.log(chalk.blue.inverse('task edited'))
    }
}
//show all tasks function
const showAll = ()=>{
    const tasks = loadTasks()
    if(tasks.length == 0){
        console.log(chalk.yellow.inverse('no tasks yet'))
    }
    else{
        tasks.forEach(task => {
           console.log(chalk.green.inverse(`${task.title}`))
        });
    }
}
const showOne = (title,content)=>{
    const tasks = loadTasks()
    const task = tasks.find(task=>task.title==title)
    if(!task){
        console.log(chalk.yellow.inverse('no task found'))
    }
    else{
        console.log(chalk.green.inverse(`name: ${task.title}, content: ${task.content}`))
    }
}
const editStatus = (title)=>{
    const tasks = loadTasks()
    const index = tasks.findIndex(task=>task.title == title)
    if(index == -1){
        console.log(chalk.yellow.inverse('no task found'))
    }
    else{
        tasks[index] = {
            id:tasks[index].id,
            title:tasks[index].title,
            content:tasks[index].content,
            status:true
        }
        saveTasks(tasks)
        console.log(chalk.blue.inverse('status has been updated'))
    }
}

module.exports={
    addTasks,
    deleteTask,
    editTask,
    showAll,
    showOne,
    editStatus
}