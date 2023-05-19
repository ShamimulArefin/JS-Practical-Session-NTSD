function combinations_of_a_string(string) {
    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j <= string.length; j++) {
        // console.log(string.slice(i, j));
        if (i!=string.length-1) {
          document.write(string.slice(i, j) + ", ");
        }
        else {
          document.write(string.slice(i, j));
        }
      }
    }
}
  
var string = 'dog';
combinations_of_a_string(string);