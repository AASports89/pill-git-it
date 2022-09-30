//DEPENDECY & IMPORT//
const router = require("express").Router();
const {Post} = require("../../models");

//CREATE//
router.post("/", async (req, res) => {
    try {
        const dbPillData = await Post.create({
            shape: req.body.shape,
            color: req.body.color,
            imprint: req.body.imprint,

            author_id: req.body.author_id,
        });
    return res.status(200).json(dbPillData);
        } catch (err) {
            console.log(err);
        return res.status(500).json(err);
    }
});

//UPDATE//
router.put("/:id", async (req, res) => {
    try {
        const updateResult = await Post.update(req.body, {
            where: {
            id: req.params.id,
        },
    });
    return res.status(200).json(updateResult);
        } catch (err) {
            console.log(err);
    return res.status(500).json(err);
    }
});

//DELETE//
router.delete("/:id", async (req, res) => {
    try {
        const deletePostData = await Post.destroy({
            where: {
            id: req.params.id,
        },
    });
    return res.status(200).json(deletePostData);
        } catch (err) {
            console.log(err);
    return res.status(500).json(err);
    }
});

module.exports = router;