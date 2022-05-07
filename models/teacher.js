const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    TeacherName:{
        type:String
        //,required:true
    },
    TeacherId:{
        type:Number,
        //,required:true
    },
    TeacherPassword:{
        type:String
        //, required:true
    },
    AllocatedStudents:[{
        type:String
    }]
        
    }
)

module.exports=mongoose.model('Teachers',teacherSchema);