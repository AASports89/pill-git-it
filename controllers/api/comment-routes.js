const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({})
    .then((commentData) => res.json(commentData))
    .catch((err) => {
      res.status(500).json(err);
    });
});
//CREATE COMMENT//
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
        image: req.body.image,
        type: req.body.type,
        color: req.body.color,
        imprint: req.body.imprint,
        description: req.body.description,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
    })
      .then((commentData) => res.json(commentData))
      .catch((err) => {
        res.status(400).json(err);
      });
  }
});

//DELETE//
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((commentData) => {
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id❗⛔' });
        return;
      }
      res.json(commentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;