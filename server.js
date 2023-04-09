const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://vitalii:igE5YtyVjVzEeO7E@cluster0.yq3puce.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error));

// igE5YtyVjVzEeO7E
