var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With , Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST", "GET")
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var subcribers = [
   {
       "id": "234kjw",
       "email": "joe@shmoe.ercom",
       "firsName": "Joe"
   }
];

/*var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];*/

app.get('/subcribers', funsction(req, res) {
    console.log("GEt From SERVER")
    res.send(subcribers);
});

app.post('/subcribers', function(req, res) {
    var subcriber = req.body;
    var subcriber.id = Math.floor(Datenow()/ 1000) + req.body.email;
    console.log(req.body);
    subcribers.push(subcriber);
    res.status(200).send("Successfully posted ingredient");
});

app.listen(6069);
