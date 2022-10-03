const User = require("./User");
const PillData = require("./PillData");
const Comment = require("./Comment");

User.hasMany(PillData, {
  foreignKey: "user_id",
});

PillData.belongsTo(User, {
  foreignKey: "user_id",
});

PillData.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
  hooks: true,
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks: true,
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  hooks: true,
});

Comment.belongsTo(PillData, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks: true,
});

module.exports = { User, PillData, Comment };
