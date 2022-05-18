const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(removeUser);

router
  .route('/:userId/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;