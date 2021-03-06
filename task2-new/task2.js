const yargs = require('yargs')
const chalk = require('chalk')
const myFun = require('./myFunction')
// console.log(chalk.red.inverse('hi'))
//add customer yargs
yargs.command({
    command:'add',
    describe:'add new customer',
    builder:{
        id:{
            type:'number',
            demandOption:true,
            describe:'add new id'
        },
        name:{
            type:'string',
            demandOption:true,
            describe:'add new name'
        },
        balance:{
            type:'number',
            demandOption:true,
            describe:'add new balance'
        }
    },
    handler:function(argv){
        myFun.addCus(argv.id,argv.name,argv.balance)
    }
})
//delete customer yargs
yargs.command({
    command:'delete',
    describe:'delete one customer by the name',
    builder:{
        name:{
            type:'string',
            demandOption:true,
            describe:'enter the name that we want to delete it'
        }
    },
    handler:function(argv){
        myFun.deleteCus(argv.name)
    }
})
//add balance yarg
yargs.command({
    command:'addB',
    describe:'add balance',
    builder:{
        // id:{
        //     type:'number',
        //     // demandOption:true 
        // },
        name:{
            type:'string',
            demandOption:true
        },
        balance:{
            type:'number',
            demandOption:true
        },
        newBalance:{
            type:'number',
            demandOption:true
        }
    },
    handler:function(argv){
        myFun.addBalance(argv.id,argv.name,argv.balance,argv.newBalance)
    }
})
//show one customer yarg
yargs.command({
    command:'show',
    describe:'show one customer info by the id',
    builder:{
        id:{
            type:'number',
            demandOption:true
        }
    },
    handler:function(argv){
        myFun.showOne(argv.id)
    }
})
yargs.argv