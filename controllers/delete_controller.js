const List = require('../models/contect');

const Cmpitem = require('../models/task');

module.exports.delete = function(req,res){

    //1. Get id from query in the url

    // console.log(req.query);  for checking

 

    let id = req.query.id;

    // console.log(id);    this i have used for checking 

    //find the contect in the database using id

    var item;

    

    List.findById(id,function(err,user){

        if(err)
        {
            console.log('Error in finding');
            return;
        }



        //now we will set item in completed derver

        Cmpitem.create({
            name:user.name,
            category:user.category
        },function(err,newList){
            if(err)
            {
                console.log('Error in creating the List',err);
                return;
            }
 
            console.log('***********',newList);
 
        //    return res.redirect('back');
        });


     });
     
     
   




    List.findByIdAndDelete(id,function(err){

        if(err)
        {
            console.log('Error in deleting contact fron data base');
            return;
        }

        return res.redirect('back');

        
    });
 




};
