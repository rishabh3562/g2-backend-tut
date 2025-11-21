const express = require('express');

const userRouter = express.Router();
const User = require('../model/userSchema')
const { getAll, deleteUser, updateUserByParts, updateUser, addUser } = require("../controller/userController")
userRouter.route("/").get(getAll).post(addUser)
userRouter.route("/:id").put(updateUser).patch(updateUserByParts).delete(deleteUser)

module.exports = userRouter;