
'use strict';

require('bootstrap-datepicker');
require('./css/index.css');

var $ = require('jquery');

var show = require('./show');

/**
 * datepicker prototype
 */
var proto = $.fn.datepicker.prototype.constructor.Constructor.prototype;

/**
 * rewrite  datepicker.prototype.show
 * @type {$.fn.datepicker.prototype.constructor.Constructor.show|*}
 */
proto.oldShow = proto.show;
proto.show = function(){
    var self = this;
    self.oldShow(arguments);

    show(self);
};


module.exports = void 0;