'use strict';

var Mongo = require('mongodb');

function Category(){
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.all = function(user, cb){
  Category.collection.find({userId:user._id}).toArray(cb);
};

Category.create = function(o, user, cb){
  o.userId = user._id;
  Category.collection.save(o, cb);
};

Category.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Category.collection.findOne({_id:_id}, cb);
};

module.exports = Category;

