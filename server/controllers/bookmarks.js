'use strict';

var Bookmark = require('../models/bookmark');


exports.index = function(req, res){
  Bookmark.all(req.user, function(err, bookmarks){
    res.send({bookmarks:bookmarks});
  });
};

exports.create = function(req, res){
  Bookmark.create(req.body, req.user, function(err, bookmark){
    res.send({bookmark:bookmark});
  });
};

