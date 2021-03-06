const chalk = require('chalk')
const yargs = require('yargs')
const myFun = require('./myFun')
// console.log(chalk.red.inverse('joiii'))
//add yargs
yargs.command({
    command:'add',
    describe:'add new task',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'add new title'
        },
        content:{
            type:'string',
            demandOption:true,
            describe:'add new content'
        } 
    },
    handler: function(argv){
        myFun.addTasks(argv.title,argv.content)
    }
})
//delete yarg
yargs.command({
    command:'delete',
    builder:{
        title:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        myFun.deleteTask(argv.title)
    }
})
//edit yarg
yargs.command({
    command:'edit',
    describe:'edit the task by the title',
    builder:{
        title:{
            type:'string',
            demandOption:true
        },
        newTitle:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        myFun.editTask(argv.title,argv.newTitle)
    }
})
//show all yarg
yargs.command({
    command:'showAll',
    describe:'show all taska',
    handler:function(){
        myFun.showAll()
    }
})
//show one yarg
yargs.command({
    command:'showOne',
    describe:'show one task',
    builder:{
        title:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        myFun.showOne(argv.title)
    }
})
//edit status yargs
yargs.command({
    command:'editS',
    describe:'edit the status',
    builder:{
        title:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        myFun.editStatus(argv.title)
    }
})
//to call the yargs
// yargs.argv
yargs.parse()