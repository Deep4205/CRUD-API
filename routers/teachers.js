const express = require('express');
const teacher = require('../models/teacher');
const router = express.Router();
const Teacher = require('../models/teacher');

// ? random Number generator for ids and passwords
const RandomNum = require('../utility/RandomNumberGenerator');
let random = RandomNum.randomFunction(); //* create 10 digits random number 

//!This is a HTTP GET request which fetch all data from collection-teacher and pass in json format
router.get('/', async(req,res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.send("Error : "+error);
    }
})

//! This is a HTTP GET request which fetch one teacher from collection-teacher by its id(mongodb id)
//* Passes 'null' if id not found
router.get('/:id', async(req,res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        res.json(teacher);
    } catch (error) {
        res.send("Error : "+error);
    }
})


// !This is a HTTP POST request which insert document in collecion-teacher
router.post('/', async(req,res) => {
    const teacher = new Teacher({
        TeacherName : req.body.TeacherName,
        TeacherId : random,
        TeacherPassword : random+random
    });

    try {
        const t1 = await teacher.save() ;
        res.json(t1);
    } catch (error) {
        res.send("Error: "+error)
    }
})

//! This is a HTTTP PATCH request that will update mentor's name for particular teacher by FindByID method
router.patch('/:id', async(req,res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        teacher.TeacherName = req.body.TeacherName;
        teacher.TeacherId = req.body.TeacherId;
        teacher.TeacherPassword = req.body.TeacherPassword;
        teacher.AllocatedStudents = req.body.AllocatedStudents;
        const t1 = await teacher.save();
        res.json(t1);
    } catch (error) {
        res.send("Error : "+error);
    }
})

//! This is a HTTP DELETE request which delete one teacher from teacher collection by its id(mongodb id)
router.delete('/:id', async(req,res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);
        res.json(teacher);
    } catch (error) {
        res.send("Error : "+error);
    }
})

//! This is a HTTP DELETE request which delete all teachers from teacher collection.
router.delete('/', async(req,res) => {
    try {
        const teacher = await Teacher.deleteMany();
        res.json(teacher);
    } catch (error) {
        res.send("Error : "+error);
    }
})

module.exports = router;