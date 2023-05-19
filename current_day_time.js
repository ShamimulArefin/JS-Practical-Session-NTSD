var curr_date = new Date();

// get current day
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var curr_day = days[curr_date.getDay()];

// get current time
let curr_hour = curr_date.getHours();
var curr_minute = curr_date.getMinutes();
var curr_second = curr_date.getSeconds();

let meridiem = 'AM';
if (curr_hour >= 12) {
    meridiem = 'PM';
    if (curr_hour > 12) {
        curr_hour -= 12;
    }
}

// output
// console.log(`Today is: ${curr_day}`)
// console.log(`Current time is: ${curr_hour} ${meridiem} : ${curr_minute} : ${curr_second}`)
document.write(`Today is: ${curr_day}` + "<br>");
document.write(`Current time is ${curr_hour} ${meridiem} : ${curr_minute} : ${curr_second}` + "<br>");