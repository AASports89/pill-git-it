const router = require("express").Router();

//RENDER HANDLEBARS VIEW ON PAGE LOAD//
router.get("/", async (req, res) => {
    res.render("logout", {
        loggedIn: false,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;