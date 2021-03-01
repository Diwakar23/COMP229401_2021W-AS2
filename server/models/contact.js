//Created by Diwakar Singh
//Section: 401
//Roll No: 301185459
//Assignment: 01


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