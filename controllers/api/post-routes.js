const router = require("express").Router();
const { Post } = require("../../models");

//CREATE POST//
router.post("/", async (req, res) => {
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            photo_Url: req.body.photo_Url,
            type: req.body.type,
            color: req.body.color,
            imprint: req.body.imprint,
            shape: req.body.shape,
            author_id: req.body.author_id,
        });
        return res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//UPDATE POST//
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

//DELETE POST//
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
