const request = require('request')
const getData = (api,callback)=>{
    if(api == 'posts'){
        url = `https://jsonplaceholder.typicode.com/posts`
    }
    else if(api == 'albums'){
        url = `https://jsonplaceholder.typicode.com/albums`
    }
    request({ url , json:true }, (e,{body})=>{
        if(e){
            callback('error in api service',false)
        }
        else if(body.error){
            callback('error inside api body', false)
        }
        else{
            callback(false,body)
        }
    })
   
}
module.exports = {
    getData
}