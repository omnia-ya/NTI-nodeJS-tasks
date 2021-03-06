const fs = require('fs')
const chalk = require('chalk')
//load the customers function
const loadCus = ()=>{
    try{
        const customers = JSON.parse(fs.readFileSync('customers.json'))
        return customers
    }
    catch(e){
        return []
    }
}
//to write the new values in customers json file
const saveCus = (customers) =>{
    fs.writeFileSync('customers.json',JSON.stringify(customers))
}
//add new customer function
const addCus = (id,name,balance)=>{
const customers = loadCus()
customers.push({
    id:id,
    name:name,
    balance:balance,
    status:false
})
saveCus(customers)
console.log(chalk.blue.inverse('the customer added succesfully'))
}
//to delete customer
const deleteCus = (name)=>{
    const customers = loadCus()
    const customersAfterDel = customers.filter(cus=>cus.name != name)
    if(customers.length > customersAfterDel.length){
        saveCus(customersAfterDel)
        console.log(chalk.red.inverse('custemer has been deleted'))
    }
    else{
        console.log(chalk.yellow.inverse('custemer not found'))
    }
}
//to add balance "edit" function
const addBalance = (id,name,balance,newBalance)=>{
    const customers = loadCus()
    let index = customers.findIndex(cus=> cus.name == name)
    if(index == -1){
        console.log(chalk.red.inverse('customer not found'))
    }
    else{
        customers[index] = {
            id:customers[index].id,
            name:name,
            balance: balance+newBalance,
            status:customers[index].status
        }
        saveCus(customers)
        console.log(chalk.blue.inverse('balance added succesfully'))
    }
}
//show one customer funtion
const showOne = (id)=>{
    const customers = loadCus()
    const cus = customers.find(cus=>cus.id ==id)
    if(!cus){
        console.log(chalk.yellow.inverse('no customer found'))
    }
    else{
        console.log(chalk.green.inverse(`id: ${cus.id}, name: ${cus.name}, balance: ${cus.balance}, status: ${cus.status}`))
    }
    

}

module.exports={
    addCus,
    deleteCus,
    addBalance,
    showOne
}