const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');

// development settings: 
const url = (process.env.NODE_ENV === 'development') ? '127.0.0.1' : '138.197.204.0'; 
const port = (process.env.NODE_ENV === 'development') ? 3000 : 80;

// middlewares:

// app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname,'../client/dist')));

// start the app:
app.listen(port, url, () =>{
  console.log(`listening at ${port}`);
});

app.get('/now', (req, res) => {
  // tell em what you are working now.
  res.send(200);
});
