const mongoose = require("mongoose");
const connectDB = (connectionString) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
//export the promise
module.exports = connectDB;
