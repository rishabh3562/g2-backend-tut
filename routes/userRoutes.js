const express = require('express');

const userRouter = express.Router();
const User = require('../model/userSchema')
const { getAll, deleteUser, updateUserByParts, updateUser, addUser } = require("../controller/userController")
userRouter.route("/users").get(getAll).post(addUser)
userRouter.route("/users/:id").put(updateUser).patch(updateUserByParts).delete(deleteUser)

module.exports = userRouter;