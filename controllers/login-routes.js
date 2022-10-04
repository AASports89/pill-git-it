const router = require("express").Router();

//RENDER HANDLEBARS VIEW ON PAGE LOAD//
router.get("/", async (req, res) => {
    res.render("login", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;