const mongoose = require('mongoose');


const listSchama = new mongoose.Schema({

        name:{

            type:String,
            required:true
        },

        category:{

            type:String,
            required:true


        },
        duedate:{

            type:Date,
            required:true


        }


});

const List = mongoose.model('List',listSchama);
module.exports = List;