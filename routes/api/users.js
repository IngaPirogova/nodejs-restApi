 const express = require("express");

 const {auth, ctrlWrapper, validation} = require("../../middlewares");
 const {emailSchema} = require("../../models/user");

 const {users: ctrl} = require("../../controllers");

 const router = express.Router();

 router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

 router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail))

 router.get("/verify", validation(emailSchema), ctrl.resendVerifyEmail)

 module.exports = router;