var bodyParser = require('body-parser');
//Left out morgan here and in the module.exports


module.exports = function(app, express) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '../../client/'));
};