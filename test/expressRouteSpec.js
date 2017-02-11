var sinon = require('sinon');
const should = require("chai").should(),
assert = require ("chai").assert,
expect = require ("chai").expect;
supertest = require("supertest"),
app = require("../../bin/www");
const Restaurant = require('../restaurants/restaurantEntity');

var url = supertest("http://localhost:8080/restaurants");

describe("Get all todos", function(){
         // Test will pass if we get all todos
        it("should return all todos", function(done){
            var RestaurantMock = sinon.mock(Restaurant);
            var expectedResult = {status: true, Restaurant: []};
            RestaurantMock.expects('find').yields(null, expectedResult);
            Restaurant.find(function (err, result) {
                RestaurantMock.verify();
                RestaurantMock.restore();
                expect(result.status).to.be.true;
                done();
            });
        });

        // Test will pass if we fail to get a todo
        it("should return error", function(done){
            var RestaurantMock = sinon.mock(Restaurant);
            var expectedResult = {status: false, error: "Something went wrong"};
            RestaurantMock.expects('find').yields(expectedResult, null);
            Restaurant.find(function (err, result) {
                RestaurantMock.verify();
                RestaurantMock.restore();
                expect(err.status).to.not.be.true;
                done();
            });
        });
    });

   // Test will pass if the todo is saved
    describe("Post a new todo", function(){
        it("should create new post", function(done){
            var RestaurantMock = sinon.mock(new Restaurant({ restaurant: 'Save new restaurant from mock'}));
            var restaurant = RestaurantMock.object;
            var expectedResult = { status: true };
            RestaurantMock.expects('save').yields(null, expectedResult);
            restaurant.save(function (err, result) {
                RestaurantMock.verify();
                RestaurantMock.restore();
                expect(result.status).to.be.true;
                done();
            });
        });
        // Test will pass if the todo is not saved
        it("should return error, if post not saved", function(done){
            var RestaurantMock = sinon.mock(new Restaurant({ restaurant: 'Save new restaurant from mock'}));
            var restaurant = RestaurantMock.object;
            var expectedResult = { status: false };
            RestaurantMock.expects('save').yields(expectedResult, null);
            restaurant.save(function (err, result) {
                RestaurantMock.verify();
                RestaurantMock.restore();
                expect(err.status).to.not.be.true;
                done();
            });
        });
    });


// Test will pass if the todo is updated based on an ID
  describe("Update a new todo by id", function(){
    it("should updated a todo by id", function(done){
      var RestaurantMock = sinon.mock(new Restaurant({ completed: true}));
      var restaurant = RestaurantMock.object;
      var expectedResult = { status: true };
      RestaurantMock.expects('save').withArgs({_id: 12345}).yields(null, expectedResult);
      restaurant.save({_id: 12345},function (err, result) {
        RestaurantMock.verify();
        RestaurantMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });
    // Test will pass if the Restaurant is not updated based on an ID
    it("should return error if update action is failed", function(done){
      var RestaurantMock = sinon.mock(new Restaurant({ completed: true}));
      var restaurant = RestaurantMock.object;
      var expectedResult = { status: false };
      RestaurantMock.expects('save').withArgs({_id: 12345}).yields(expectedResult, null);
      restaurant.save({_id: 12345},function (err, result) {
        RestaurantMock.verify();
        RestaurantMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
    });
  });

      // Test will pass if the todo is deleted based on an ID
    describe("Delete a todo by id", function(){
        it("should delete a todo by id", function(done){
            var RestaurantMock = sinon.mock(Restaurant);
            var expectedResult = { status: true };
            RestaurantMock.expects('remove').withArgs({_id: 12345}).yields(null, expectedResult);
            Restaurant.remove({_id: 12345}, function (err, result) {
                RestaurantMock.verify();
                RestaurantMock.restore();
                expect(result.status).to.be.true;
                done();
            });
        });
        // Test will pass if the todo is not deleted based on an ID
        it("should return error if delete action is failed", function(done){
            var RestaurantMock = sinon.mock(Restaurant);
            var expectedResult = { status: false };
            RestaurantMock.expects('remove').withArgs({_id: 12345}).yields(expectedResult, null);
            Restaurant.remove({_id: 12345}, function (err, result) {
                RestaurantMock.verify();
                RestaurantMock.restore();
                expect(err.status).to.not.be.true;
                done();
            });
        });
    });

//
// describe('chrome test', function() {
//     it('should be invalid if name is empty', function(done) {
//         var m = new Restaurant();
//
//         m.validate(function(err) {
//             expect(err.errors.name).to.exist;
//             done();
//         });
//     });
// });


// describe.only("Testing calculator POST route", function(err){
//  it("should add the correct object", function(done){
//    url
//        .post("/add")
//        .send({ id: "4", location: "bangalore",cusine: "chinese"})
//        .expect(200)
//         .expect('Content-Type', /json/)
//         .end(function(err,res){
//           should.not.exist(err);
//           var myObj = JSON.parse(res.text);
//           (myObj.id).should.be.equal("4");
//           myObj.cusine.should.be.equal("chinese");
//           myObj.location.should.be.equal("bangalore");
//           done();
//        });

//  });

//  it("Delete the restaurant", function(done){
//  url
//      .delete("/delete")
//      .send({ "_id":"" })
//      .expect(200)
//      .end(function(err,res){
//        should.not.exist(err);
//        (res.text).should.not.equal("enter valid ID","Id should be a number");
//        (res.text).should.equal("Deleted Successfully","Expected value not matching with response");
//        done();
//      });

// });

//  it("update the restaurant", function(done){
//  url
//      .put("/update")
//      .send({ "id":"10" , comments : "ssss" })
//      .expect(200)
//      .end(function(err,res){
//        should.not.exist(err);
//        (res.text).should.not.equal("enter valid details","Id should be a number,comments should be filled");
//        (res.text).should.equal("comments updated","Expected value not matching with response");
//        done();
//      });

// });

//  it("update the restaurant", function(done){
//  url
//      .get("/fetch")
//      .send({ "id":"10" , comments : "ssss" })
//      .expect(200)
//      .end(function(err,res){
//        should.not.exist(err);
//        (res.text).should.not.equal("enter the valid object","Id should be a number,comments should be filled");
//        //(res.text).should.equal("comments updated","Expected value not matching with response");
//        done();
//      });

// });
// });
