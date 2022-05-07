const express = require('express');
const student = require('../models/student');
const router = express.Router();
const Student = require('../models/student')

//!This is a HTTP GET request which fetch all data from student collection and pass in json format
router.get('/', async(req,res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.send("Error : "+error);
    }
})

//! This is a HTTP GET request which fetch one student from student collection by its id(mongodb id)
//* Result: 'null' if id not found
router.get('/:id', async(req,res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.send("Error : "+error);
    }
})


// !This is a HTTP POST request which insert document in student collection 
router.post('/', async(req,res) => {
    const student = new Student({
        StudentName : req.body.StudentName,
        EnrollmentNumber : req.body.EnrollmentNumber,
        MentorName : req.body.MentorName
    });

    try {
        const s1 = await student.save() ;
        res.json(s1);
    } catch (error) {
        res.send("Error: "+error)
    }
})

//! This is a HTTTP PATCH request that will update mentor's name for particular student by FindByID method
router.patch('/:id', async(req,res) => {
    try {
        const student = await Student.findById(req.params.id);
        student.MentorName = req.body.MentorName;
        const s1 = await student.save();
        res.json(s1);
    } catch (error) {
        res.send("Error : "+error);
    }
})

//! This is a HTTP DELETE request which delete one student from student collection by its id(mongodb id)
router.delete('/:id', async(req,res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.json(student);
    } catch (error) {
        res.send("Error : "+error);
    }
})

//! This is a HTTP DELETE request which delete all students from student collection.
router.delete('/', async(req,res) => {
    try {
        const student = await Student.deleteMany();
        res.json(student);
    } catch (error) {
        res.send("Error : "+error);
    }
})

module.exports = router;