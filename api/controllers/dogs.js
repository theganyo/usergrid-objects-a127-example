'use strict';

var _ = require('lodash');
var async = require('async');

var Usergrid = require('usergrid-objects')();
var Dog = require('../models/dog');
var controller = _.bindAll(new Usergrid.Controller(Dog));

var cartController = {

  create: controller.create,
  update: controller.update,
  list: controller.list,
  delete: controller.delete,
  get: controller.get,

  pet:
    function(req, res, next) {
      var id = controller.getParam(req, 'id');
      if (!id) { return res.json(400, 'missing id'); }
      Dog.find(id, function(err, dog) {
        if (err) { return controller.send(err); }
        if (dog.friendly) {
          res.send(dog.name + ' licked you!');
        } else {
          res.send(dog.name + ' bit you!');
        }
      });
    }
};

module.exports = cartController;
