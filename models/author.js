var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    var Authors = sequelize.define("Authors",{
        name: DataTypes.STRING,
    });
    
    Authors.associate = function(models){
        Authors.hasMany(models.Post,{
        onDelete: "cascade"
        })
    }
    return Authors;
};
