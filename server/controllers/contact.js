//Created by Diwakar Singh
//Section: 401
//Roll No: 301185459
//Assignment: 01




let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model

let Contact = require('../models/contact');

module.exports.displayContactList =  (req, res, next) => {
    Contact.find((err, contactList) => {
            if(err)
   {
       return console.error(err);
   }
   else
   {
      // console.log(contactList);
       res.render('contact/list', {title : 'Contacts', 
       ContactList : contactList, 
       displayName: req.user ? req.user.displayName : ''}) ;
       
   }
}) ;
};
module.exports.displayAddPage = (req, res, next) =>{
    res.render('contact/add', {title : 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''
     }) 

}

module.exports.processAddPage = (req, res, next) =>{
    let newContact = Contact({
          "Name": req.body.Name,
          "Number": req.body.Number,
          "Email": req.body.Email,
    });
   Contact.create(newContact,(err, Contact) =>{
    if(err){
   
      console.log(err);
      res.end(err);
    }
    else{
   
   
       //refresh the contact list
       res.redirect('/contact-list');
    }
   
   
   })
   }
   module.exports.displayUpdatePage = (req, res, next) =>{
    let id = req.params.id;

    Contact.findById(id,(err,contact2Update) =>{
      if(err){

        console.log(err);
        res.end(err);
      }
      else
      {
          //show the update views
          res.render('contact/update',{title:'Update Contact' , contact: contact2Update,
          displayName: req.user ? req.user.displayName : ''
        })
      }
        


    });


}
module.exports.processUpdatePage = (req, res, next) =>{
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "Name": req.body.Name,
        "Number": req.body.Number,
        "Email": req.body.Email,


    });

    Contact.updateOne({_id: id},updatedContact,(err) =>{
        if(err){

            console.log(err);
            res.end(err);
          }
          else
          {

                //refresh the contact list
                res.redirect('/contact-list');

          }


    });

}
module.exports.performDelete = (req, res, next) =>{

    let id = req.params.id;

    Contact.remove({_id:id},(err) =>{

        if(err){

            console.log(err);
            res.end(err);
          }
          else
          {

                //refresh the contact list
                res.redirect('/contact-list');

          }



    });


}