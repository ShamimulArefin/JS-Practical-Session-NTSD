# JS-Practical-Session-NTSD

#### 1. Write a JavaScript program to display the current day and time in the following format.
##### Sample Output : Today is : Tuesday
##### Current time is : 10 PM : 30 : 38

```js
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
console.log(`Today is: ${curr_day}`);
console.log(`Current time is: ${curr_hour} ${meridiem} : ${curr_minute} : ${curr_second}`);
```
##### Output
###### Today is: Friday
###### Current time is 2 PM : 47 : 9

#### 2. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
```js
var initial_year = 2014;
var final_year = 2050;

for(let year = initial_year; year<=final_year; year++) {
    var first_january = new Date(year, 0, 1);
    if (first_january.getDay() == 0) { //0 means the first day of week [sunday, monday, ..., friday, saturday]
        console.log(`1st January is sunday in ${year}`); // output
    }
}
```             
##### Output
###### 1st January is sunday in 2017
###### 1st January is sunday in 2023
###### 1st January is sunday in 2034
###### 1st January is sunday in 2040
###### 1st January is sunday in 2045

#### 3. Write a JavaScript function to test if a number is a power of 2
```js
// iterative process
function isPowerOfTwo(n) {
    if (n === 0) {
    return false;
    }
    while (n % 2 === 0) {
    n /= 2;
    }
    return n === 1;
}

// math bitwise operator left shift
function isPowerOfTwo(n) {
    return n > 0 && (1 << 31) % n === 0;
}

// test output
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(9));
```          
##### Output
###### 0 is a power of 2: false
###### 1 is a power of 2: true
###### 8 is a power of 2: true
###### 9 is a power of 2: false

#### 4. Write a JavaScript function that generates all combinations of a string.
##### Example string : 'dog'
##### Expected Output : d,do,dog,o,og,g
```js
function combinations_of_a_string(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
        console.log(string.slice(i, j));
        }
    }
}
    
var string = 'dog';
combinations_of_a_string(string);
```
##### Output
###### d, do, dog, o, og, g

#### 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
```js
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
```             
##### Output
###### 0 is Even
###### 1 is Odd
###### 2 is Even
###### 3 is Odd
###### 4 is Even
###### 5 is Odd
###### 6 is Even
###### 7 is Odd
###### 8 is Even
###### 9 is Odd
###### 10 is Even
###### 11 is Odd
###### 12 is Even
###### 13 is Odd
###### 14 is Even
###### 15 is Odd