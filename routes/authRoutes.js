const express = require('express');
const { loginHandler, registerHandler, meHandler, logoutHandler } = require('../controller/authController');
const authRouter = express.Router();

authRouter.route("/login").post(loginHandler);
authRouter.route("/register").post(registerHandler);
authRouter.route("/getme").get(meHandler);
authRouter.route("/logout").post(logoutHandler);
module.exports = authRouter;