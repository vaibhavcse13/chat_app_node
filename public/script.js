$(()=>{
    $("#send").click(function(){
        addMessage({name : "Vaibhav Shukla" , message:  "Hi , How are you ?"})
    })
    
});

function addMessage(msg){
    $("#message").append(`<h4> ${msg.name} </h4> <p>${msg.message}</p>`)
}