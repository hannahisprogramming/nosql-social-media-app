const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts);
router
  .route('/:userId')
  .post(createThought);
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)
  .put(addReaction);
router
  .route('/:userId/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;
