
const mongoose = require('mongoose');



//define mongoose schema
const contactSchema = new mongoose.Schema({
    firstname: {
        type:String
    },
    lastname:  {
        type:String
    },
    email: {
        type:String
    },
    phone:  {
        type:String
    },
    desc:  {
        type:String
    }
  });

const Contact = mongoose.model('Contact', contactSchema);
module.exports=Contact;