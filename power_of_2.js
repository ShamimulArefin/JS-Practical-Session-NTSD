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
// console.log(isPowerOfTwo(0));
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(9));

document.write("0 is a power of 2: "+isPowerOfTwo(0) + "<br>");
document.write("1 is a power of 2: "+isPowerOfTwo(1) + "<br>");
document.write("8 is a power of 2: "+isPowerOfTwo(8) + "<br>");
document.write("9 is a power of 2: "+isPowerOfTwo(9) + "<br>");