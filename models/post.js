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
            len: [1]
      },
      free: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        len: [1]
    }
    })

    return Post;
};
