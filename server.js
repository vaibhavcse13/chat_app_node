const express =  require('express'),
      bodyParser =  require('body-parser'),
     app =  express(),
     http =  require('http').Server(app),
     io =  require('socket.io')(http),
     mongoose =  require('mongoose');


// server static content 
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const dbUrl = "mongodb://vaibhav:vaibhav123@ds125862.mlab.com:25862/chat_app_node";

var Message = mongoose.model('Message' , {
    name : String ,
    message : String
})

app.get('/messages' , (req , res) => {   
    Message.find({} , (err , messages) =>{
        if(err)
            res.sendStatus(500);
        res.send(messages)
    })
});

// post reuest to post messge 
app.post('/message' , (req , res) => {
    
    var message =  new Message(req.body);
    message.save().then(()=> {
        Message.findOne({'message' : 'badword'} , (err , censor) =>{

            if(err)
                console.log("error in filtering" , err)

            console.log("censor" , censor)
            if(censor){
                console.log("censor word found " ,  censor);
                Message.remove({_id : censor.id} , (err) =>{
                    console.log("word removed")
                })
            }
        })
        io.emit('message' , req.body);
        res.sendStatus(200)
           
    }).catch((err) => {
        
        console.log(err)
        res.sendStatus(500)
    })
        
      

   
});

io.on('connection' , (socket) => {
    console.log("user connected");
});

mongoose.connect(dbUrl, {useNewUrlParser : true} , (err)=>{
    console.log("database connected " , err);
})
var server =  http.listen(3000 ,  ()=>{
    console.log(`server is running on port ${server.address().port}`)
})
