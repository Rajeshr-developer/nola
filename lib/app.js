var path = require('path');
var express = require('express');
var slashes = require('connect-slashes');
var cors = require('cors');
var Cabs = require('./Cabs');

module.exports = function createApp(options) {
    var cabs = new Cabs(path.join(__dirname, '..'));

    var app = express();
    app.use(express.bodyParser());
    app.use(slashes(false));

    app.use(cors());

    function toggleCabBooking(id, type, callback) {
        cabs.bookUnbookCab(id, type, function (data) {
            callback(data);
        });
    }

    app.get('/rides', function (req, res) {
        var data = cabs.getCabs();
        res.json(data);
    });

    app.put('/book/:id', function (req, res) {
        var id = parseInt(req.params.id, 10);
        toggleCabBooking(id, 1, function (_data) {
            res.json(_data);
        })
    });

    app.put('/unbook/:id', function (req, res) {
        var id = parseInt(req.params.id, 10);
        toggleCabBooking(id, 0, function (_data) {
            res.json(_data);
        })
    });

    return app;
};