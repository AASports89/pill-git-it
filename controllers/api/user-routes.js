const router = require("express").Router();
const { User } = require("../../models");

//CREATE USER --> CLIENT//
router.post("/", async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.is_admin,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.loggedInUserData = dbUserData;
            return res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//USER LOGIN//
router.post("/login", async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res.status(400).json({
                message: "Incorrect username or password, please try again ❗⛔" ,
            });
            return;
        }
       
        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: "Incorrect username or password, please try again ❗⛔" ,
            });
            return;
        }
    
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.loggedInUserData = dbUserData;
            console.log("💽", req.session.cookie);

            res.status(200).json({
                user: dbUserData,
                message: "Success!✅ You are now logged in!✅",
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//USER LOGOUT//
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;