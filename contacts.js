const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => {
      const contacts = JSON.parse(data);
      console.log("Contacts:", contacts);
    })
    .catch((error) => {
      console.error("Error reading contacts file:", error);
    });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => {
      const contacts = JSON.parse(data);
      const contact = contacts.find((c) => c.id === contactId);
      if (contact) {
        console.log("Contact:", contact);
      } else {
        console.log("Contact not found");
      }
    })
    .catch((error) => {
      console.error("Error reading contacts file:", error);
    });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => {
      const contacts = JSON.parse(data);
      const updatedContacts = contacts.filter((c) => c.id !== contactId);
      return fs.writeFile(
        contactsPath,
        JSON.stringify(updatedContacts, null, 2)
      );
    })
    .then(() => {
      console.log("Contact removed successfully");
    })
    .catch((error) => {
      console.error("Error reading or writing contacts file:", error);
    });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8")
    .then((data) => {
      const contacts = JSON.parse(data);
      const newContact = { id: Date.now(), name, email, phone };
      const updatedContacts = [...contacts, newContact];
      return fs.writeFile(
        contactsPath,
        JSON.stringify(updatedContacts, null, 2)
      );
    })
    .then(() => {
      console.log("Contact added successfully");
    })
    .catch((error) => {
      console.error("Error reading or writing contacts file:", error);
    });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
