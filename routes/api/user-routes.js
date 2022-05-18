const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser//,
  //addFriend,
  //removeFriend
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  //.put(addFriend)
  .delete(removeUser);

// router
//   .route('/:userId/:friendId')
//   .delete(removeFriend);

module.exports = router;