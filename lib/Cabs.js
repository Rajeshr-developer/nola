var path = require('path');
var fs = require('fs');
var async = require('async');

var Cabs = function Cabs(dataPath) {
    this.cacheData = null;
    this.dataPath = dataPath;
};

Cabs.prototype._loadNolaData = function () {

    var pathname = path.join(this.dataPath, "db.json");
    var input = fs.readFileSync(pathname);
    var data = JSON.parse(input);

    this._library = data;

    return this._library;
};

Cabs.prototype.getCabs = function () {
    this._loadNolaData();
    return this._library;
};

Cabs.prototype.bookUnbookCab = function (id, type, callback) {

    /**
     *  catch and return duplicate hits..!
     */

    var cacheVar = id + '~' + type;

    if (JSON.stringify(cacheVar) === JSON.stringify(this.cacheData)) {
        callback(this._library);
        return;
    };
    
    var files = this._loadNolaData();
    let _data = [];

    async.forEach(files, (value, key, callback) => {
        if (value.id == id) {
            value = {
                ...value,
                'available': !type
            }
        }
        _data.push(value);
    }, err => {
        if (err) console.error(err.message);
        callback(this._library);
        return;
    });

    this.cacheData = cacheVar;
    if (_data.length > 0) fs.writeFileSync(this.dataPath + "/db.json", JSON.stringify(_data, null, 2), 'utf-8');
    callback(this.getCabs());
};

module.exports = Cabs;