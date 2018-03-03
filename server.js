var http = require('http');
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080


app.listen(8080, () => {
  console.log("Started on http://localhost:8080");
});

//----------------------------------------------------------------------

app.get('/details', function(req, res) {
	myObj = { "name":"John", "age":30 };
	res.send(myObj);
  //res.sendFile(`${__dirname}/index.html`);
});

//----------------------------------------------------------------------

app.post('/login', function (req, res){
  const username = req.body.username;
  const password = req.body.password;
  console.log(`POST request: username is ${username} and password is ${password}`);
  console.log("kkkkk "+ req.body);
  res.end("yes");
  console.log("POST string");
});

//----------------------------------------------------------------------

app.get('/webhookSample', function (req, res) {
   fs.readFile( __dirname + "/" + "requestdata.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

//----------------------------------------------------------------------

app.post('/webhookRequestData', function (req, res) {
	console.log( "REQUEST: " + req );
	const query = req.inputs[0].rawInputs[0].query;
	console.log( "QUERY: " + query );
   // First read existing users.
   fs.readFile( __dirname + "/" + "responsedata.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//----------------------------------------------------------------------
