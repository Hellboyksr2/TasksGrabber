var mongoose = require("mongoose");
var schema = mongoose.Schema;


module.exports = function () {

  var userSchema = new schema({
    name : String,
    createdDate : Date,
    lastModifiedDate : Date,
    tasks: [{name : String, date : Date, status : String}]
  });

  return mongoose.model('User', userSchema);;
};
