const mongoose = require('mongoose');


const completedSchama = new mongoose.Schema({

        name:{

            type:String,
            required:true
        },

        category:{

            type:String,
            required:true


        }


});

const Cmpitem = mongoose.model('Cmpitem',completedSchama);
module.exports = Cmpitem;