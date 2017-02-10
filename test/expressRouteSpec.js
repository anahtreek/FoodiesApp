const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/restaurants");

describe("Testing POST route ", function(err){
 it("should handle and send the computed info", function(done){
   url
       .post("/add")
       .send({ "restaurant_name":"alpha" ,"id" :"123" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         (res.text).should.equal("hai","Expected value not matching with response");
         done();
       });

 });
 it("should handle and send the computed info", function(done){
   url
       .post("/add/id")
       .send({ "restaurant_name":"alpha" ,"restaurant_id" :"123" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         (res.text).should.equal("alpha","restaurant_name should not contain numbers");
         done();
       });
 });
});
describe("Testing Delete route ", function(err){
 it("should handle and send the computed info", function(done){
   url
       .delete("/delete")
       .send({ "restaurant_id" :"123" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         (res.text).should.equal("deleted","id does not exit ");
         done();
       });
 });
 });
 describe("Testing put route ", function(err){
  it("should handle and send the computed info", function(done){
    url
        .put("/update")
        .send({ "restaurant_comments" :"food is good" })
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          (res.text).should.equal("food is good","enter comments ");
          done();
        });

  });
  });
  describe("Testing get route ", function(err){
   it("should handle and send the computed info", function(done){
     url
         .get("/fetch")
         .send("")
         .expect(200)
         .end(function(err,res){
           should.not.exist(err);
           (res.text).should.equal("fetch successful","invalid input ");
           done();
         });

   });
   });
