// oldest person in an array function

function oldestPerson(namesAges) {
 var oldest = 0;
 var oldestname = " ";
 for (var i = 0; i < namesAges.length; i++) {
   if (namesAges[i].age > oldest){
      oldestname = namesAges[i].name;
      oldest = namesAges[i].age;
  }


 }
  return oldestname;
}

var namesAges = [
  {name: "Chuck", age:22},
  {name: "Brian", age:46},
  {name: "jj", age:112}
];
var test = namesAges[0];


var result = oldestPerson(namesAges);
//console.log(result);

// longest word in a string function
function longestWord(string) {
  var longestString = ""; //sets a var to empty string
  var longest = 0; //set variable to 0 to compare lengths
  var arr = string.split(" "); //set a variable to create an array

  //var arr2 = arr.split("");
  for (var i = 0; i < arr.length; i++) { //loop
    if (arr[i].length > longest){ //if index length is greater than the longest (starts at 0)
      longest = arr[i].length;//resets longest
      longestString = arr[i];
    //compare each element and find longest one
    }
  }

  return longestString;
}

console.log(longestWord("we are pair hhhhhhhhhhhhhhhhhhh programming yo"));

// factorial function returns the factorial of any number you pass into as argument

function factorial(number){
  if(number === 0){
    return 1;

  }

  return number * factorial(number - 1);
}
factorial(5);
