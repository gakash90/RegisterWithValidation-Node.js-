const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registraton", {
   
}).then(()=>{
    console.log("Server is connected");
}).catch((e)=>{
    console.log("Error while connecting");
})






