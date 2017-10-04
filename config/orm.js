var connection = require("./connection.js");


var orm = {

    all: function(cb) {

        connection.query("SELECT * FROM burgers", function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    insert: function(burger_name, cb) {

        var d = new Date();
        var timestamp = '' + d.getFullYear() + '-';
        var month = '' + (d.getMonth() + 1);
        if (month.length == 1) {
            month = '0' + month;
        }
        timestamp += month + '-';
        var day = '' + d.getDate();
        if (day.length == 1) {
            day = '0' + day;
        }
        timestamp += day + ' ';
        var hour = '' + d.getHours();
        if (hour.length == 1) {
            hour = '0' + hour;
        }
        timestamp += hour + ':';
        var minute = '' + d.getMinutes();
        if (minute.length == 1) {
            minute = '0' + minute;
        }
        timestamp += minute + ':';
        var second = '' + d.getSeconds();
        if (second.length == 1) {
            second = '0' + second;
        }
        timestamp += second;

        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false,
            date: timestamp
        }, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    update: function(burgerID, cb) {

        connection.query("UPDATE burgers SET ? WHERE ?", [{ devoured: true }, { id: burgerID }], function(err, res) {
            if (err) throw err;
            cb(res);
        });

    }
};

module.exports = orm;