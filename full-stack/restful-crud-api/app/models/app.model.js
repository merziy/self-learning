const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  message: String,
});

model.exports = mongoose.model("App", AppSchema);
