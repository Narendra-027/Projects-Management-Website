const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require("validator");
const regex = new RegExp('[a-z]+@iitj.ac.in');

let projectSchema = new Schema({
projectname: {
	type : String,
	required: [true,"Project title cannot be empty !"] ,
	trim : true,
},
professorname: {
	type : String,
	required: true,
	trim : true,
},
email: {
	type : String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email id is invalid !")
            }
            if(regex.test(value)==false){
                throw new Error("This email id is out of institution !")
            }
        }
},
overview: {
	type : String,
	required: true,
	trim : true,
},
prereq: {
	type: String,
	required: true
},
students: {
	type : Number,
	required: true,
	trim : true, 
	validate(value){
		if(value<=0){
			throw new Error("Number of students required can't be equal to zero or less than zero.");
		}}
},
duration: {
	type: Number,
	required: true
},
branch: {
	type : String,
	required: true,
	lowercase : true,
	trim : true,
	enum : ["computer science & engineering","electrical engineering","mechanical engineering",
	"bioengineering","materials engineering","chemical engineering",
	"civil and infrastructure engineering","artificial intellingence and data science"] 
},

vacancy: {
	type: Number
}
}, {
	collection: 'projects'
})

module.exports = mongoose.model('Project', projectSchema)
