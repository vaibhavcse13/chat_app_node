$(()=>{
    $("#send").click(function(){
        addMessage({name : "Vaibhav Shukla" , message:  "Hi , How are you ?"})
    });

    $.get("http://localhost:3000/messages" , function(data){
        data.forEach(addMessage);
    })
    
});

function addMessage(msg){
    $("#message").append(`<h4> ${msg.name} </h4> <p>${msg.message}</p>`)
}