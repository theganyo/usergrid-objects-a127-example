'use strict';

var Usergrid = require('usergrid-objects')();
var is = Usergrid.validators;

var DogClass = {};
Usergrid.define(DogClass, Dog);
module.exports = DogClass;

DogClass.attrs('name', 'breed', 'friendly');

DogClass.validates({
  name:  [ is.required ],
  breed:  [ is.required ],
  friendly:  [ is.boolean ]
});

function Dog() {
}
