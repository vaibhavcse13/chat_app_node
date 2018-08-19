const express =  require('express'),
      bodyParser =  require('body-parser');
     app =  express();


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
    console.log(req.body)
    messages.push(req.body);
    console.log(messages)
    res.sendStatus(200)
})
var server =  app.listen(3000 ,  ()=>{
    console.log(`server is running on port ${server.address().port}`)
})
