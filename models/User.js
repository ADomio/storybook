const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  googleID:{
    type: String,
    required: true // Since Google is the only authentication offered
  },
  email:{
    type: String,
    required: true
  },
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  image:{
    type: String
  }
});

// Create collection and add schema
mongoose.model('users', UserSchema);
