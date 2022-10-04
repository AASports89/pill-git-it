const router = require("express").Router();
const userRoutes = require("./user-routes");
const pillDataRoutes = require("./pillData-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/pillData", pillDataRoutes);
router.use("/commentData", commentRoutes);

module.exports = router;