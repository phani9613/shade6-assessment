var mongoose = require('mongoose');  
var UserEventSchema = new mongoose.Schema({  
  name: String,
  type: String,
  members_count: Number
});
mongoose.model('UserEvent', UserEventSchema);

module.exports = mongoose.model('UserEvent');