let mongoose = require('mongoose');

//create a model class for
let contactModel = mongoose.Schema({ 

Name : String,
Number :  String,
Email : String

},

{
collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);