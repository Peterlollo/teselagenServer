var plasmidController = require('../plasmids/plasmidController.js');

module.exports = function(app, express) {
  app.get('/', function(req, res, next) {
    console.log('connected on port 8000 to teselagenServer');
    res.send(200);
  })
  app.get('/plasmids', plasmidController.retrievePlasmidsFromTeselagen);
};