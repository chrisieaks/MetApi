var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    console.log("inside of post")
    var Post = sequelize.define("Post", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [1]
        }   
      },
      // free: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      //   validate:{
      //     len: [1]
      //   } 
      // },
      // clientServer: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   len: [1]
      // }
    });
    console.log("before association")
    Post.associate = function(models){
      Post.belongsTo(models.Authors,{
        foreignKey: {
          allowNull: false
        }
      })
    }
    console.log("after association")
    return Post;


};