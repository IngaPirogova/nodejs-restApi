const express = require("express");

const router = express.Router();

const {contacts: ctrl} = require("../../controllers");
const {contactsSchema} = require("../../schemas");
const {validation, ctrlWrapper} = require("../../middlewares");

const validateMiddleware = validation(contactsSchema); 


router.get("/",  ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.put("/:contactId", validateMiddleware, ctrlWrapper(ctrl.updateById));

router.delete("/:contactId", ctrlWrapper(ctrl.deleteById));

module.exports = router;
