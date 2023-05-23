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
      const deletedContact = await contacts.removeContact(id);
      return console.table(deletedContact);
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.table(newContact);
    default:
      console.log("Invalid action");
  }
};

invokeAction({ action: "list" });
invokeAction({ action: "getById", id: "drsAJ4SHPYqZeG-83QTVW" });
invokeAction({ action: "remove", id: "1DEXoP8AuCGYc1YgoQ6hw" });
invokeAction({
  action: "add",
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "(123) 456-7890",
});
