const User = require("./User");
const PillData = require("./PillData");

User.hasMany(PillData, {
  foreignKey: "user_id",
});

PillData.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, PillData };
