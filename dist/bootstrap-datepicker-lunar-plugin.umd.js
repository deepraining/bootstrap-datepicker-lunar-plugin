!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("lunar-calendar"),require("jquery"),require("bootstrap-datepicker")):"function"==typeof define&&define.amd?define(["lunar-calendar","jquery","bootstrap-datepicker"],e):e(a.LunarCalendar,a.jquery)}(this,function(a,e){function t(e){var t=function(a){var e=new Date;return e.setTime(a),{year:e.getFullYear(),month:e.getMonth()+1,week:e.getDay(),day:e.getDate()}}(e),r=a.solarToLunar(t.year,t.month,t.day);return{year:r.lunarYear,month:r.lunarMonth,monthName:r.lunarMonthName,day:r.lunarDay,dayName:r.lunarDayName}}a=a&&a.hasOwnProperty("default")?a.default:a;var r=(e=e&&e.hasOwnProperty("default")?e.default:e).fn.datepicker.prototype.constructor.Constructor.prototype;r.oldShow=r.show,r.show=function(){for(var a=[],r=arguments.length;r--;)a[r]=arguments[r];this.oldShow(a),function(a){e(a.picker).find(".day").map(function(){var a=e(this),r=a.html();if(!(r.indexOf("<br>")>-1)){var n=t(parseInt(a.attr("data-date"),10));a.addClass("lunar-day").html(r+'<br><span class="lunar-text">'+(1===n.day?n.monthName:n.dayName)+"</span>")}})}(this)}});
//# sourceMappingURL=bootstrap-datepicker-lunar-plugin.umd.js.map