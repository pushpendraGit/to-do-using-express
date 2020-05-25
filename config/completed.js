var mongoose = require('mongoose');

//connecting the mongoose to the server

mongoose.connect('mongodb://localhost/completed_work');

//checking the connection

var ndb = mongoose.connection;


ndb.on('error', console.error.bind(console, 'connection error:'));

ndb.once('open', function() {
    console.log('Completed data base is ready to use');
  });

