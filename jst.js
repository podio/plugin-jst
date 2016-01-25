'use strict';

var _ = require('underscore');

exports.translate = function (load) {
  return 'module.exports = function(object) {\n' +
            'return ' + _.template(load.source).source + '.apply(object);\n'+
          '};';
};
