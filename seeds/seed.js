//DEPENDENCIES & IMPORTS//
const sequelize = require("../config/connection");
const axios = require("axios");
const User = require("../models/User");

const userData = require("./user-seeds.json");
const pillData = require('./pillData.json');


//CREATE TABLES & SEED FOR TESTING//
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    for (const pills of pillData) {
        await Project.create({
            ...pills,
        });
    }
    process.exit(0);
};


seedDatabase();

