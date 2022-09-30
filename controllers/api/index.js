//DEPENDENCY//
const router = require("express").Router();

//IMPORT//
    const userRoutes = require("./user-routes.js");
    const postRoutes = require("./post-routes");

//API ROUTE PASS -->//
    router.use("/user", userRoutes);

    module.exports = router;