const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = '138.197.204.0';

// middlewares

app.use(bodyParser.json());

// start the app

app.listen(80, url, () =>{
  console.log('listening at 80');
});

app.get('/', (req, res) => {
  res.send('hello world 2');
});


