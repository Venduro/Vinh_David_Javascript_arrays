var a = [.1, .6, .3, .4, .5];
var max = 0;
var min = 1;

//finds the maximum value in the array
  a.forEach(
    function(x) {
      if (x > max) {
        max = x ;
      }
      console.log(max)

    }
  );
//finds the smallest number in the array.
    a.forEach(
      function(x) {
        if (x < min) {
          min = x ;
      }  console.log(min)

    }
//Calculate sum of array using .forEach
    a.forEach(function(element) {sum = (element + sum)}); console.log(sum);

//Calculates sum of array using a "while" loop.
    while (i < a.length) {sum = a[i] + sum; i++}; console.log(sum);
//Function that calculates the sum of an array using a "while" loop.
  function arraySum() {
    var i=0;
    var sum=0;
    while (i < a.length) {sum = a[i] + sum; i++}; console.log(sum);
  }

  //Function that calculates the sum of an array using .forEach
  function arraySumForEach () {
    var sum = 0;
    a.forEach(function(element) {sum = (element + sum)});console.log(sum);
  }

//Calculates the mean value
var mean
var sum = 0
a.forEach(function(element) {sum = (element + sum); mean = (sum/a.length)}); console.log(mean);

//Finds the index of the highest number
a.forEach(function(x) {if (x > max) {max = x ;}}); return max;


function maxValue(a) {
  a.forEach(function(x) {if (x > max) {max = x ;}}); return (max);}

a.indexOf(maxValue(a));

//Create an Array with Siblings and Parents Names Challenge

var siblings = ["john", "david", "daniel", "justin", "patrick"]
var parents = ["mary", "ruth", "ford", "nam", "oscar"]

//siblings in alphabetical order
siblings.sort();

//parents in reverese alphabetical order
parents.sort().reverse();

//combines parents and siblings array into one new array and then sorts all names in alphabetical order
var newArray = siblings.concat(parents);
newArray.sort();

//reverse sort
newArray.sort().reverse();

//reverse alphabetical order in one string
newArray.sort().reverse().join();

//Creates function determining if a name is within an array of names.

newArray.toString()
var name;

function givenName() {
  if (newArray.some(name) != -1) {console.log("Yes, " +name+ "is in this array.")
}
else {console.log ("Sorry, no " +name+ "here!")}
}

familiesString.search("Liz");

//Search for name//
function findName(name){
  if (familiesString.search(name) != -1)
   {console.log("Yes " + name + " is in the string." )
   }
   else {console.log("No " + name + " is not in the string." )
   }
}

function givenName(name) {if (newArray.some(name) != -1) {console.log("HI " +name+)} else {console.log(+name+ "not here")}};
