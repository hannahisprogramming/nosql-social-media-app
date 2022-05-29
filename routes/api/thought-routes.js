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
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)
router
  .route('/reactions/:thoughtId')
  .put(addReaction);
router
  .route('/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;
