function max(a, b) {
  if (a > b){
  return a;
} else {
  return b;
}};

function maxOfThree(a, b, c) {
  if ((a > b) && (a > c)) {
   return a ;
} else if ((b > a) && (b > c)) {
   return b ;
} else {
   return c;
}
};

function vowelTest(char1) {
  if ((char1 == "a" || char1 == "e" || char1 == "i" || char1 == "o" || char1 == "u") == true) {
  return true;
} else {
   return false;
}};
/* must be string, could add another function to take any input? */

/*works, but only on lower case, I'm sure there is another step to get it to work with any case, also not defined as an independent function */
var str = "some sort of string"
var spltArray = str.split("")
spltArray.map(function(char1) {
  if ((char1 == "a" || char1 == "e" || char1 == "i" || char1 == "o" || char1 == "u" || char1 == " ") !== true) {
   return (char1 + "o" + char1);
} else {
   return char1;
}}).join("");
