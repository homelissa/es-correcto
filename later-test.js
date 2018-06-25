var later = require('later');

// later.date.UTC();
later.date.localTime();

var textSched = later.parse.text('at 11:26am every weekday');
var secondTextSched = later.parse.text('every 1 min');
// function to execute
function logTime() {
  console.log(new Date());
  console.log("new Date()");
}
later.setInterval(logTime, textSched);
// clear the interval timer when you are done
// timer2.clear();
