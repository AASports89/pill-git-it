const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          photo_Url: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
          type: {
          type: DataTypes.STRING(1000),
          allowNull: false,
          },
          color: {
          type: DataTypes.STRING(1000),
          allowNull: false,
          },
          imprint: {
          type: DataTypes.STRING(1000),
          allowNull: false,
          },
          shape: {
          type: DataTypes.STRING(1000),
          allowNull: false,
          },
          author_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
        },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;
