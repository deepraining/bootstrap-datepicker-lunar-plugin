
'use strict';

/**
 * get year, month, day, week according to input timestamp
 *
 * @param timeStamp
 * @returns {{year: number, month: number, week: number, day: number}}
 */
module.exports = (timeStamp) => {
    var date = new Date();
    date.setTime(timeStamp);

    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        week: date.getDay(),
        day: date.getDate()
    };
};
