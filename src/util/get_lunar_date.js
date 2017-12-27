
'use strict';

var LunarCalendar = require('lunar-calendar');

var getDate = require('./get_date');

/**
 * get lunar year, month, day, week according to input timestamp
 *
 * @param timeStamp
 */
module.exports = (timeStamp) => {
    var date = getDate(timeStamp);

    var lunarInfo = LunarCalendar.solarToLunar(date.year, date.month, date.day);

    return {
        year: lunarInfo.lunarYear,
        month: lunarInfo.lunarMonth,
        monthName: lunarInfo.lunarMonthName,
        day: lunarInfo.lunarDay,
        dayName: lunarInfo.lunarDayName
    };
};
