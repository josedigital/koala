const express = require('express');
const mongoose = require('mongoose');

const app = express();
const controllers = require('./controllers/index');


app.use(express.static('./'));
app.use(express.static('dist'));


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.use('/', controllers);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
