const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

const app = express();
app.use(cors());
const controllers = require('./controllers/index');
fs = require('fs');

require('./config/passport')(passport);


app.use(express.static('./'));
app.use(express.static('dist'));

//------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//-----------------------
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

//--------------------- PASSPORT
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions






//--------------------- INDEX FILE & CONTROLLERS
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.use('/', controllers);
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
    route = require('./controllers/' + file);
    app.use(route, controllers);
  }
});


//--------------------- MONGOOSE
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
var db = mongoose.connection;
db.on("error", function(err){
    console.log("Mongoose connection error", err);
});
db.once("open", function(){
    console.log("Mongoose connection Successful, check port 8080");
});








const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('app listening on', port);
});
