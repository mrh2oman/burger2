var burger = require("../models/burger.js");
var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/index");
});

router.get("/index", function(req, res) {
    burger.all(function(data) {
        var hamBurger = { burgers: data };
        res.render("index", hamBurger);
    });
});

router.post("/burger/create", function(req, res) {
    burger.insert(req.body.burger_name, function() {
        res.redirect("/index");
    });
});

router.post("/burger/eat/:id", function(req, res) {
    burger.update(req.params.id, function() {
        res.redirect("/index");
    });
});


module.exports = router;