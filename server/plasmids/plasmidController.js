var request = require('request');

module.exports = {
  //RETURN PLASMID DATA
  retrievePlasmidsFromTeselagen: function (req, res, next) {
    res.send(createPlasmids());
  }
};


//CREATE RANDOM PLASMID JSON DATA
 function createPlasmids (req, res, next) {
  var nucleotideOptions = 'gatc';
  var sequence = '';
  var sequenceLength = Math.floor(Math.random() * 100);
  //generate random sequence of length = sequenceLength
  for(var i = 0; i < sequenceLength; i++) {
    sequence += nucleotideOptions[Math.floor(Math.random() * 4)];
  }
  //generate random Index length
  var generateIndex = function(){
    return Math.floor(Math.random() * sequenceLength);
  }
  var stockFeatureObj = {
          "name":"Promotor1",
          "index": generateIndex(),
          "length":1
        }
  var data = {
    "sequence": sequence,
    "sequenceLength": sequenceLength,
    "features": []
  };
  for(var j = 0; j < 3; j++) {
    data.features.push(stockFeatureObj);
  }
  return data;
}