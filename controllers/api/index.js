const router = require("express").Router();
const userRoutes = require("./user-routes");
const pillDataRoutes = require("./pillData-routes");

router.use("/users", userRoutes);
router.use("/pillData", pillDataRoutes);

module.exports = router;
