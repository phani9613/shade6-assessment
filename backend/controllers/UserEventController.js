var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var UserEvent = require('../schemas/UserEvent');

// CREATES A NEW USER
router.post('/', function (req, res) {
    UserEvent.create({
            user_id : req.body.user_id,
            event_id : req.body.event_id,
        }, 
        function (err, userevent) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(userevent);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    UserEvent.find({}, function (err, userevents) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(userevents);
    });
});

// // GETS A SINGLE USER FROM THE DATABASE
// router.get('/:id', function (req, res) {
//     User.findById(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem finding the user.");
//         if (!user) return res.status(404).send("No user found.");
//         res.status(200).send(user);
//     });
// });

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    UserEvent.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ userevent.name +" was deleted.");
    });
});

module.exports = router;