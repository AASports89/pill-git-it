//IMPORT//
  const { Model, DataTypes } = require("sequelize");
  const bcrypt = require("bcrypt");
  const sequelize = require("../config/connection");
  const { PillData } = require("./");

  class Data extends Model{}

  Data.init({
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
    name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    description: {
    type: DataTypes.STRING,
  },
    date_created: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
    user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'post',
      key: 'id',
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'data',
  }
);

module.exports = Data;