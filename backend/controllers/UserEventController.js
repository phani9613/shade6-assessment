var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var UserEvent = require('../schemas/UserEvent');


// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    console.log("dda", req.query.user_id)
    UserEvent.find({
        "user_id": req.query.user_id
    }, function (err, userevents) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(userevents);
    });
});
// CREATES A NEW USER
router.post('/', function (req, res) {
    UserEvent.create({
        user_id: req.body.user_id,
        event_id: req.body.event_id,
        event_name: req.body.event_name,
        event_type: req.body.event_type,
        event_members_count: req.body.event_members_count
    },
        function (err, userevent) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(userevent);
        });
});



// DELETES A USER FROM THE DATABASE
router.delete('/', function (req, res) {
    UserEvent.findByIdAndRemove(req.query.id, function (err, userevent) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        if (userevent == null)
            res.status(200).send("No Event is in favourite List");
        else
            res.status(200).send(userevent);
    });
});
router.get('/events_registered', function (req, res) {

    UserEvent.aggregate(
        [{
            $match: {
                user_id: req.query.user_id
            }
        },
        {
            $count: "events_registered"
        }
        ]
    ).exec((err, events) => {
        if (err) throw err;
        console.log(events);
        res.status(200).send(events);
    });
});

module.exports = router;