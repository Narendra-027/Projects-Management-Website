const mongoose = require('mongoose');
const validator = require("validator");
const regex = new RegExp('[a-z]+@iitj.ac.in');




const signUpTemplate = new mongoose.Schema({
  fullname: {
    type : String,
    required: true,
        
},
    username: {
      type : String,
      required: true,
          
  },
    email: {
        type : String,
        required: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email id is invalid !")
                }
                if(regex.test(value)==false){
                    throw new Error("This email id is out of institution !")
                }
            }
    },
  password: { type: String, required: true }
});


module.exports = mongoose.model('mytable', signUpTemplate);

