const express =  require('express'),
      bodyParser =  require('body-parser'),
     app =  express(),
     http =  require('http').Server(app),
     io =  require('socket.io')(http),
     mongoose =  require('mongoose');


// server static content 
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
var messages = [{name :"Vaibhav" , message : "How are you ?"},
    {name :"Sid" , message : "Yeah Fine "}
]
app.get('/messages' , (req , res) => {   
    res.send(messages);
});

// post reuest to post messge 
app.post('/message' , (req , res) => {
    messages.push(req.body);
    io.emit('message' , req.body);
    res.sendStatus(200)
});

io.on('connection' , (socket) => {
    console.log("user connected");
})
var server =  http.listen(3000 ,  ()=>{
    console.log(`server is running on port ${server.address().port}`)
})
