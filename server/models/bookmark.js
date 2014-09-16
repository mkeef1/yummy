'use strict';

var Mongo    = require('mongodb'),
    async    = require('async'),
    Category = require('./category');

function Bookmark(o, id){
  this.name     = o.name;
  this.userId   = Mongo.ObjectID(id);
  this.url      = o.url;
  this.category = o.category;
  this.created  = new Date();
}

Object.defineProperty(Bookmark, 'collection', {
  get: function(){return global.mongodb.collection('bookmarks');}
});

Bookmark.create = function(o, id, cb){
  var b = new Bookmark(o, id);
  Bookmark.collection.save(b, function(err, bookmark){
    iterator(bookmark, cb);
  });
};

Bookmark.all = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Bookmark.collection.find({userId:_id}).toArray(function(err, bookmarks){
    async.map(bookmarks, iterator, cb);
  });
};

module.exports = Bookmark;

//private helper functions

function iterator(bookmark, cb){
  Category.findById(bookmark.category, function(err, category){
    bookmark.category = category.name;
    cb(null, bookmark);
  });
}
