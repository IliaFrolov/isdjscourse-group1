npm install
npx eslint homework/iagn
Fix code style errors
//Homework/2/iagn
//Problem 1
//Program must return numbers from 1 to 100 including condition that 
//"Fizz" is returned instead of the number devidable by 3,
//"Buzz" is returned instead of the number devidable by 5,
//and "FizzBuzz" for both.

let result = '';
let c = 0;
let dev3, dev5, dev15;
do {
	c = c + 1;
	dev3=Number.isInteger(c/3);
	dev5=Number.isInteger(c/5);
	dev15=Number.isInteger(c/15);
	if (dev15) {
		result='FizzBuzz';
	} else if (dev3) {
		result='Fizz';
	} else if (dev5){
		result='Buzz';
	} else result = c;
	console.log(result);
} while (c < 100);

//Problem 2
//Program must check word, string or number 
//if its elements' values are centrally simetrical

let bulResult=false, resultExp = '';
let initial_str = prompt('Please enter the string, word or number', 'string, word or number'); 
	if (initial_str != null) {
		console.log('Your initial string is: ' + initial_str + '!');
	} else {
		console.log('You must add a string before checking it!');
	}
let strArray = String(initial_str).split('');//modify initial_str to string data type and fill in the array where elements are symbols of initial_str
console.log("Your array has the next following elements: " + strArray);//array output
let strLength = strArray.length;//strLength = number of elements in strArray
console.log("The length of your array or number of its symbols is: " + strLength);//output
//let loopSelector=Number.isInteger(strLength/2);//even=true; odd=false
let i=0;//When we compare two different elements out of the array we'll need some indicators to do so
let j=strLength-1;

do {
	if (strArray[i]===strArray[j]) {
		bulResult=true; //we should continue checking other pairs of symbols
		i=i+1;
		j=j-1;
	} else {
		bulResult=false; //here we can stop since there's no sense to continue, we already know that's not gonna happen
		i=j+1;
	}
} while (i<j);

if (bulResult===true) {
	resultExp='Yes, you are lucky! Your expression is centrally symmetrical!';
} else resultExp='No, not at this time...';
console.log(resultExp);
