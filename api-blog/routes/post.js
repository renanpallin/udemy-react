const express = require('express');
const router = express.Router();
const passport = require('passport');

const { posts } = require('../initial_state_mock');

/* GET all posts */
router.get('/', (req, res) => {
  res.json(posts);
});

/* Create a post */
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { body: post, user } = req;
    res.json({ post, user });
  }
);

/* Update a post */
router.post(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { body: post, user } = req;
    const { id } = req.params;
    res.json({ id, post, user });
  }
);

/* Delete a post */
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { body: post, user } = req;
    const { id } = req.params;
    res.json({ id, post, user });
  }
);

module.exports = router;
