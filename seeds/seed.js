//DEPENDENCIES & IMPORTS//
const sequelize = require("../config/connection");
const { User, PillData } = require("../models");

const userData = require("./user-seeds.json");
const pillsData = require("./pillData.json");

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

seedDatabase();
