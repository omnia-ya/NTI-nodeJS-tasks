const yargs = require('yargs')
const chalk = require('chalk')
const data = require('./app')

yargs.command({
    command:'show',
    builder:{
        name:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        data.getData(argv.name,(error, result)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log(result)
            }
        })
    }
})
yargs.argv
