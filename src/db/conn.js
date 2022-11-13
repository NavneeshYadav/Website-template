const mongoose = require("mongoose");
// creating a database
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log(error);
  });
