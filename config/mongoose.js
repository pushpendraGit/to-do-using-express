var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/to_do_list');

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Data Base is rady to Use');
  });