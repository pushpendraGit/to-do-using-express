const express = require('express');

const port = 8000;

const path = require('path');


//require server wich is data base
const db = require('./config/mongoose');


//require the server which is data

const ndb = require('./config/completed');

//we will require Schama

const List = require('./models/contect');

//we will require the completed section Schama

const Cmpitem = require('./models/task');


const app = express();

// adding middleware for view engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
//adding middle ware for css and js fiile

app.use(express.static('assets'));




//Here we are using router

//use express router

app.use('/',require('./routes'));

//using single router to all controller

app.use('/completed',require('./routes'));

app.use('/delete-contect/',require('./routes'));

app.use('/create-contact',require('./routes'));











//Now Here we are deleting the completed work


app.get('/delete-completed/',function(req,res){

    //1. Get id from query in the url

    // console.log(req.query);  for checking

 

    let id = req.query.id;

    // console.log(id);    this i have used for checking 

    //find the contect in the database using id

    Cmpitem.findByIdAndDelete(id,function(err){

        if(err)
        {
            console.log('Error in deleting contact fron data base');
            return;
        }

        return res.redirect('back');

        
    });
 
});










//taking data form form and adding into the list

app.post('/create-contact',function(req,res){

  

       List.create({
           name:req.body.name,
           category:req.body.category,
           duedate:req.body.duedate
       },function(err,newList){
           if(err)
           {
               console.log('Error in creating the List',err);
               return;
           }

        //    console.log('***********',newList);

          return res.redirect('back');
       });
   

});


app.listen(port,function(err){

    if(err)
    {
        console.log('There is error for lanching the server');
        return;
    }

    console.log('Server is running at post :',port);
})