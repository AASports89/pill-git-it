//DEPENDENCIES & IMPORTS//
    const sequelize = require("../config/connection");
    const User = require("../models/User");

    const userData = require("./user-seeds.json");


//CREATE TABLES & SEED FOR TESTING//
    const seedDatabase = async () => {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
        });

    process.exit(0);
    };

    seedDatabase();