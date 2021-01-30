const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({

  username: { 
      type: String
    },
  password: {
      type: String
    },
  email: {
      type: String
    },
    
});

const AdminUser = mongoose.model("AdminUser", AdminUserSchema);

module.exports = AdminUser;