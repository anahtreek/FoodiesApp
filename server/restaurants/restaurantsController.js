const Restaurant = require('./restaurantsEntity');


var Restaurantcntrl = {
	 // Get all todos from the Database
        Get : function(req, res){
            Restaurant.find({}, function(err, todos){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, restaurant:todos});
            });
        },

       //Post a todo into Database
        post: function(req, res){
            var restaurant = new Restaurant(req.body);
            restaurant.save(function(err, todo){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, message: "Restaurant Saved!!"});
            });
        },

        // Deleting a todo baed on an ID
        delete: function(req, res){
          Restaurant.remove({_id: req.params.id}, function(err, Restaurants){
            if(err) {
              res.json({status: false, error: "Deleting Restaurant is not successfull"});
              return;
            }
            res.json({status: true, message: "Restaurant deleted successfully!!"});
          });
        },


    	// Deleting a todo baed on an ID
   		 update: function(req, res){
            var comments = req.body.comments;
            Restaurant.findById(req.params.id, function(err, restaurant){
            restaurant.comments = comments;
            restaurant.save({_id: req.params.id},function(err, todo){
              if(err) {
                res.json({status: false, error: "Status not updated"});
              }
              res.json({status: true, message: "Status updated successfully"});
            });
            });
        },
}



// router.get('/view', function(req, res) {
//  console.log('Inside get');
//  Restaurant.find({}, function(err, restaurants) {
//    if(err) {
//        throw err;
//    }
//    //console.log(users);
//    res.send(restaurants);
//  })
// };

module.exports = Restaurantcntrl;

// GetTodo: function(req, res){
//             Todo.find({}, function(err, todos){
//               if(err) {
//                 res.json({status: false, error: "Something went wrong"});
//                 return;
//               }
//               res.json({status: true, todo: todos});
//             });
//         },
