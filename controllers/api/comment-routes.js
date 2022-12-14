const router = require("express").Router();
const { Comment } = require("../../models");

//CREATE COMMENT//
router.post("/", async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            comment: req.body.comment,
            photo_Url: req.body.photo_Url,
            post_id: req.body.post_id,
            author_id: req.body.author_id,
        });
        return res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//DELETE COMMENT//
router.delete("/:id", async (req, res) => {
    try {
        const deleteCommentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json(deleteCommentData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

module.exports = router;