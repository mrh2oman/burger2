var orm = require("../config/orm.js");

var burger = {

    all: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },

    insert: function(burger_name, cb) {
        orm.insert(burger_name, function(res) {
            cb(res);
        });
    },

    update: function(burgerID, cb) {
        orm.update(burgerID, function(res) {
            cb(res);
        });
    },
}