//DEPENDENCY//
const router = require("express").Router();

//IMPORT//
    const userRoutes = require("./user-routes.js");

//API ROUTE PASS -->//
    router.use("/user", userRoutes);

    module.exports = router;