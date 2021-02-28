let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//connect to our Contacts Model
//let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
/*GET Route for the Contact List Page - READ Operation */
router.get('/',contactController.displayContactList);

/*GET Route for displaying the  Add Page - Create Operation */
router.get('/add',requireAuth,contactController.displayAddPage);
/*Post Route for processing the Add Page - Create Operation */
router.post('/add',requireAuth,contactController.processAddPage);

/*GET Route for displaying  the Update Page - Update Operation */
router.get('/update/:id',requireAuth,contactController.displayUpdatePage);

/*GET Route for processing   the  Update Page - Update Operation */
router.post('/update/:id',requireAuth,contactController.processUpdatePage);

/*GET to perform Delection - Delete Operation */
router.get('/delete/:id',requireAuth,contactController.performDelete);

module.exports = router;