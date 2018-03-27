
var bcrypt = require("bcrypt-nodejs");
var Sequelize = require("sequelize");
var config = require('../config/config.json');



var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    var Authors = sequelize.define("Authors",{
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          }
    });

    Authors.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
      Authors.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });
    
    Authors.associate = function(models){
        Authors.hasMany(models.Post,{
        onDelete: "cascade"
        })
    }
    return Authors;
};

