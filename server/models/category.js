'use strict';


function Category(){
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.all = function(cb){
  Category.collection.find().toArray(cb);
};

Category.create = function(o, cb){
  Category.collection.save(o, cb);
};

module.exports = Category;

