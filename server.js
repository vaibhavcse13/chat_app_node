const express =  require('express');
const app =  express();

// server static content 
app.use(express.static('public'));
var messages = [{name :"Vaibhav" , message : "How are you ?"},
    {name :"Sid" , message : "Yeah Fine "}
]
app.get('/messages' , (req , res) => {
    res.send(messages);
})
var server =  app.listen(3000 ,  ()=>{
    console.log(`server is running on port ${server.address().port}`)
})
