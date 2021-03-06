const mongoose = require('mongoose');

// Define the schema
const Store = new mongoose.Schema({
  _id: {type: String, required: true, maxlength: 25, trim: true},
  city: {type: String, required: true, maxlength: 20, trim: true},
  state: {type: String, required: true, maxlength: 12, trim: true},
  street: {type: String, required: true, maxlength: 30, trim: true},
  building_number: {type: Number, required: true},
  icecream:[{type: String, required: true, trim: true}]
});

// Export the model
module.exports = mongoose.model('Store', Store);
