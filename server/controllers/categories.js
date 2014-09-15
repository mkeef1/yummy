'use strict';

var Category = require('../models/category');


exports.index = function(req, res){
  Category.all(function(err, categories){
    res.send({categories:categories});
  });
};

exports.create = function(req, res){
  Category.create(req.body, function(err, category){
    res.send({category:category});
  });
};
