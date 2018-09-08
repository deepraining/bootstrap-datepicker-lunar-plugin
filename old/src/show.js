
'use strict';

var $ = require('jquery');

var makeHtml = require('./make_html');
var getLunarDate = require('./util/get_lunar_date');

module.exports = (self) => {
    $(self.picker).find('.day').map(function () {
        var $this = $(this);
        var originText = $this.html();

        // have rendered before
        if (originText.indexOf('<br>') > -1) return;

        // timestamp
        var date = parseInt($this.attr('data-date'));

        var lunarInfo = getLunarDate(date);

        $this.addClass('lunar-day').html(makeHtml(originText, lunarInfo.day === 1 ? lunarInfo.monthName : lunarInfo.dayName));
    });
};
