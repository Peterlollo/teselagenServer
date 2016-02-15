

module.exports = function(app, express) {

  
  //fill in server side functionality here


  app.get('/users', function(req, res, err) {
    console.log('you tryin to get users? w/this req.body', req.body);
    res.send(200);
  });


  app.post('/home', function(req, res, err){
    console.log('tryin to post to users with this req.body', req.body);
    res.send({'hey': 'man'});
  });


};