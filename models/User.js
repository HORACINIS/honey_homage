const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  username: { 
    type: String,
    trim: true,
    unique: true,
    required: "Username is required"
  },

  password: { 
    type: String,
    trim: true,
    required: "Password is required",
    validate: [(value) => value.length >= 8, "Password needs to be 8 or more characters in length."]
  },

  email: { 
    type: String,
    unique: true,
    validate: {
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    }
  },

  firstName: { 
    type: String,
    trim: true,
  },

  lastName: { 
    type: String,
    trim: true,
  },
  
});

const User = mongoose.model("User", UserSchema);

module.exports = User;