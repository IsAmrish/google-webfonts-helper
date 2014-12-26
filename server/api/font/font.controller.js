/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /fonts              ->  index
 * POST    /fonts              ->  create
 * GET     /fonts/:id          ->  show
 * PUT     /fonts/:id          ->  update
 * DELETE  /fonts/:id          ->  destroy
 */
'use strict';

var _ = require('lodash');

var fontStore = require('./../../logic/fontStore');

// Get list of fonts
exports.index = function(req, res) {

  fontStore.getAll(function(items) {
    // setTimeout(function() {
      res.json(items);
    // }, 3000);
  })

};

// Get specific fonts including links
exports.show = function(req, res) {

  fontStore.get(req.params.id, function(item) {
    // setTimeout(function() {
      res.json(item);
    // }, 3000);

  });

};