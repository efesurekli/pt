const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middlewares

app.use(bodyParser.json());

// start the app

app.listen(3000, '127.0.0.1', () =>{
  console.log('listening at 3000');
});

app.get('/', (req, res) => {
  res.send('hello world 2');
});


