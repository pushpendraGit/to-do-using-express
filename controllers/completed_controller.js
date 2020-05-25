const Cmpitem = require('../models/task');

module.exports.completed = function(req,res){


    Cmpitem.find({},function(err,items){
        if(err)
        {
            console.log('there is an err in feaching from db');

            return;
        }

        
           return res.render('completed',{

            
            completed:items
           }) //this item has collectin to the all list item
        });
    }
