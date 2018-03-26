
// var mysql = require('mysql');

// var config = require('../config/config.json');
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
    var Authors = sequelize.define("Authors",{
        name: Sequelize.STRING,
    });
    
    Authors.associate = function(models){
        Authors.hasMany(models.Post,{
        onDelete: "cascade"
        })
    }
    return Authors;
};
