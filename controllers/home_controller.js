

const List = require('../models/contect');

module.exports.home = function(req,res){


    //getting data from data base

    List.find({},function(err,items){
        if(err)
        {
            console.log('Error in feching Contect from db');

            return;
        }

        //sending data to contect page

    return res.render('home',{title:'to-do',

        contact_list:items
    
    });

    });
};