const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');

// production settings:
// const url = '138.197.204.0'; 
// const port = 80;

// development settings: 
const url = '127.0.0.1'; 
const port = 3000;

// middlewares:

// app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname,'../client/public')));

// start the app:
app.listen(port, url, () =>{
  console.log(`listening at ${port}`);
});



// 33.5" 84"

// 33.75 88

