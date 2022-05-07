const express = require('express');
const mongoose = require('mongoose');
const app = express();

//* connection with mongodb
const url = 'mongodb://localhost/CRUDdb'
mongoose.connect(url , ({ useNewUrlParser : true }));

const con = mongoose.connection;
con.on('open', () => {
    console.log('Successfully connected to mongodb database...');
})

app.use(express.json());

//* '/student' route
var studentRoute = require('./routers/students');
app.use('/students' , studentRoute)

//* '/teacher' route
var teacherRoute = require('./routers/teachers');
app.use('/teachers',teacherRoute);

//* Running on local host 9000
app.listen(9000, () => {
    console.log("server is started on port: 9000" )
})