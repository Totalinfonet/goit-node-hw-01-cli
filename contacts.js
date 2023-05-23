const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
};

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
