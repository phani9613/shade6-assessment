//var express = require('express');
var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Event = require('../schemas/Event');

// CREATES A NEW USER
router.post('/', function (req, res) {
    Event.create({
            name : req.body.name,
            type : req.body.type,
            members_count : req.body.members_count
        }, 
        function (err, event) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(event);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    Event.find({}, function (err, events) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(events);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, event) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!event) return res.status(404).send("No user found.");
        res.status(200).send(event);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Event.findByIdAndRemove(req.params.id, function (err, event) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ event.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, event) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(event);
    });
});

module.exports = router;