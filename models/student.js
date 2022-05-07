const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    StudentName:{
        type:String,
        required:true
    },
    EnrollmentNumber:{
        type:String,
        required:true
    },
    StudentId:{
        type:Number
        // ,required:true
    },
    StudentPassword:{
        type:Number
        //,required:true
    },
    MentorName:{
        type:String,
        required:false
    }
        
    }
)

module.exports=mongoose.model('Students',studentSchema);