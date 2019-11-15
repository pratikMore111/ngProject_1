const express = require("express");

const app=express();

app.get('/', (request, response) => {
    response.send('<h1>welcome to my node application</h>')
})


app.listen(4000,function(){
    console.log("started at port 4000");
})