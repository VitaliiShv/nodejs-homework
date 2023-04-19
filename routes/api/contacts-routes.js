const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const { authenticate } = require("../../middlewares");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, ctrl.getContactById);

router.post(
    "/",
    authenticate,
    validateBody(schemas.addSchema),
    ctrl.addContact
);

router.delete("/:contactId", authenticate, ctrl.removeContact);

router.put(
    "/:contactId",
    authenticate,
    validateBody(schemas.addSchema),
    ctrl.updateContact
);

router.patch(
    "/:contactId/favorite",
    authenticate,
    validateBody(schemas.updateFavoriteSchema),
    ctrl.updateFavoriteById
);

module.exports = router;
