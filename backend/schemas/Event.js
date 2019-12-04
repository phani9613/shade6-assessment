var mongoose = require('mongoose');  
var EventSchema = new mongoose.Schema({  
  name: String,
  type: String,
  members_count: Number
});
mongoose.model('Event', EventSchema);

module.exports = mongoose.model('Event');