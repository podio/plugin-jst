'use strict';

var _ = require('underscore');

exports.translate = function (load) {
  return 'module.exports = ' + _.template(load.source).source + ';';
};
