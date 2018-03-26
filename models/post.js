module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      tags: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate:{
          len: [1]
        }   
      },
      free: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate:{
          len: [1]
        } 
      }
    });
    
    Post.associate = function(models){
      Post.belongsTo(models.Authors,{
        foreignKey: {
          allowNull: false
        }
      })
    }

    })

    return Post;
};