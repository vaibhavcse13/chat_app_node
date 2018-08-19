$(()=>{
    $("#send").click(function(){
        var message = {name : $("#name").val() , message : $("#msgBody").val()}
        postMessage(message)
    });


    getMessage()
    
});

function getMessage() {
    $.get("http://localhost:3000/messages" , function(data){
        data.forEach(addMessage);
    })
}

function postMessage(message){
    $.post("http://localhost:3000/message" , message);
}
function addMessage(msg){
    $("#message").append(`<h4> ${msg.name} </h4> <p>${msg.message}</p>`)
}