let express = require('express');
let app = express();
//console.log("Hello World");
//app.get("/", (req, res) => {
//  res.send("Hello Express");
//});
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");

app.use('/public', express.static(__dirname + '/public'))

const mySecret = process.env['MESSAGE_STYLE'];

app.get("/json",(req,res) => {
 let response ;
  if(process.env['MESSAGE_STYLE'] === "uppercase"){
   response  = "Hello json".toUpperCase();
  }else{
    response  = "Hello json";
  }
  res.json({"message":`${response }`});
  });
});

































 module.exports = app;
