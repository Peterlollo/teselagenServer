var morgan = require('morgan');
var bodyParser = require('body-parser');


module.exports = function(app, express) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  //ENSURE THE STATIC ROUTE POINTS TO THE PROPER CLIENT FOLDER
  //app.use(express.static(__dirname + '/../../client'));
};