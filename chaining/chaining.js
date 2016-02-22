
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8,]; var integersDecsending = integers.sort(function(a, b){return b-a});console.log(integersDecsending);

// Remove any integers greater than 19.

for(var i = integers.length - 1; i >= 0; i--) {if(integers[i] >= 19) {integers.splice(i, 1);}} console.log(integersDecsending);

// Multiply each remaining number by 1.5 and then substract 1.
		
var num = integers.map(function(num) {return num * 1.5 - 1;}); console.log(num);

// // Then output (either in the DOM or the console) the sum of all the resulting numbers.

var sum = 0; for(var i = 0; i<num.length; i++){sum+=num[1];} var sum = 0; var sum = num.reduce(function(prev, curr) {return prev + curr;}); console.log(sum)