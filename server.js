const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
const controllers = require('./controllers/index');


app.use(express.static('./'));
app.use(express.static('dist'));

//------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//-----------------------

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.use('/', controllers);

//---------------------

mongoose.connect('mongodb://localhost/koala');

var db = mongoose.connection;

db.on("error", function(err){
    console.log("Mongoose connection error", err);
});

db.once("open", function(){
    console.log("Mongoose connection Successful, check port 8080");
});

//---------------------


const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('app listening on', port);
});
