// required mongoose 
const mongoose=require('mongoose');

// connected to the db
mongoose.connect('mongodb://localhost/todo_app');

// acquired connection to db
const db=mongoose.connection;

//on error log this
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

//on successful connection
db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

//export statement
module.exports = db;