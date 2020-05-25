const express = require('express');
 const router = express.Router();


console.log('routes is running');

 const homeController = require('../controllers/home_controller');

 

 router.get('/',homeController.home);

 const work = require('../controllers/completed_controller');

 router.get('/completed',work.completed);


 //for deleting current list and adding into completed work


 const maindeleter = require('../controllers/delete_controller')


 router.get('/delete-contect/',maindeleter.delete);








 





 module.exports = router;
