//DEPENDENCY//
const router = require("express").Router();
//IMPORT API ROUTES --> SEPARATELY//
    const apiRoutes = require("./api");
    const loginRoutes = require("./login-routes");

//CONTROLLER --> ROUTES//
    router.use("/", indexRoutes);
    router.use("/api", apiRoutes);
    router.use("/login", loginRoutes);

    module.exports = router;