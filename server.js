const express =  require('express');
const app =  express();

// server static content 
app.use(express.static('public'));
console.log(__dirname)
app.listen(3000 ,() => {
   
    console.log("app is running on port 3000")
})