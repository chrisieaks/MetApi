
var mysql = require('mysql');
var Sequelize = require("sequelize");
var config = require('../config/config.json');

var connection = new Sequelize("metApi_db", "root", "",{
    host: "localhost",
    dialect: 'mysql',
});

var ApiData = connection.define("ApiData",{
    name: Sequelize.STRING,
    url: Sequelize.STRING,
    tags: Sequelize.BOOLEAN,
    free: Sequelize.BOOLEAN,
});

ApiData.associate = function(models){
    ApiData.hasMany(models.Post,{
        
    })
}


// console.log("All Good")