const express = require('express')
const app = express()

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();


/*app.get('/request', jsonParser, function(req, res) {


  })*/

  app.use('/', express.static('public'))
  app.listen(3000, () => {
    console.log(`Server running at localhost:3000`);
  });