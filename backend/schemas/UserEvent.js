var mongoose = require('mongoose');  
var UserEventSchema = new mongoose.Schema({  
  user_id: String,
  event_id: String,
  
});
mongoose.model('UserEvent', UserEventSchema);

module.exports = mongoose.model('UserEvent');