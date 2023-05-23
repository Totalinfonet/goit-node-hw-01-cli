const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "getById":
      const oneContact = await contacts.getContactById(id);
      return console.table(oneContact);
    case "remove":
      await removeContact(id);
      break;
    case "add":
      await addContact(name, email, phone);
      break;
    default:
      console.log("Invalid action");
  }
};

invokeAction({ action: "list" });
invokeAction({ action: "getById", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({ action: "remove", id: 1684778177098 });
// invokeAction({ action: "add", name: "John Doe", email: "johndoe@example.com", phone: "123456789" });
