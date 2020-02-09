var orm = require("../config/orm.js");

var burger = { 
    SelectAll: function(callback) {
        orm.SelectAll("burgers", function(res){
            callback(res);
        });
    },

    SelectCreate: function(name, callback) {
        orm.SelectCreate("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], callback);
    },

    updateOne: function(id, callback) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, callback);
    }
};

module.exports = burger;