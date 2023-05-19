var initial_year = 2014;
var final_year = 2050;

for(let year = initial_year; year<=final_year; year++) {
    var first_january = new Date(year, 0, 1);
    if (first_january.getDay() == 0) { //0 means the first day of week [sunday, monday, ..., friday, saturday]
        // console.log(`1st January is sunday in ${year}`) // output
        document.write(`1st January is sunday in ${year}` + "<br>");
    }
}