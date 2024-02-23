const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String, // обратите внимание, что String без кавычек
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
