//DEPENDENCIES & IMPORTS//
const sequelize = require("../config/connection");
const { User, PillData, Comment } = require("../models");

const userData = require("./user-seeds.json");
const pillsData = require("./pillData.json");
const commentData = require("./comment-seeds.json");

//CREATE TABLES & SEED FOR TESTING//
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const pills of pillsData) {
    await PillData.create({
      ...pills,
    });
  }
  process.exit(0);
};
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

seedDatabase();