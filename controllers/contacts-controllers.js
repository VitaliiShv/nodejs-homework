const { Contact } = require("../models/contact");

const { ctrlWrapper } = require("../utils");

const { HttpError } = require("../helpers");

const listContacts = async (req, res) => {
    const allContacts = await Contact.find();
    res.json(allContacts);
};

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    // const contact = await Contact.findOne({ _id: contactId });
    const contact = await Contact.findById(contactId);
    if (!contact) {
        throw HttpError(404, `Contact with id ${contactId} not found`);
    }
    res.json(contact);
};

const addContact = async (req, res) => {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
};

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const removedContact = await Contact.findByIdAndDelete(contactId);
    if (!removedContact) {
        throw HttpError(404, `Contact with id ${contactId} not found`);
    }
    res.status(200).json({ message: "contact deleted" });
};

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(
        contactId,
        req.body,
        { new: true }
    );
    if (!updatedContact) {
        throw HttpError(404, `Contact with id ${contactId} not found`);
    }
    res.json(updatedContact);
};

const updateFavoriteById = async (req, res) => {
    const { contactId } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(
        contactId,
        req.body,
        { new: true }
    );
    if (!updatedContact) {
        throw HttpError(404, `Contact with id ${contactId} not found`);
    }
    res.json(updatedContact);
};

module.exports = {
    listContacts: ctrlWrapper(listContacts),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    removeContact: ctrlWrapper(removeContact),
    updateContact: ctrlWrapper(updateContact),
    updateFavoriteById: ctrlWrapper(updateFavoriteById),
};
