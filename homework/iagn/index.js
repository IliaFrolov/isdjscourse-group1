// Homework/2/iagn
// Problem 1
// Program must return numbers from 1 to 100 including condition that
// "Fizz" is returned instead of the number devidable by 3,
// "Buzz" is returned instead of the number devidable by 5,
// and "FizzBuzz" for both.
let dev3, dev5, dev15;
function fizzBuzz () {
   let unit = '';
   let count = 0;
   do {
      count = count + 1;
      dev3 = Number.isInteger(count / 3);
      dev5 = Number.isInteger(count / 5);
      dev15 = Number.isInteger(count / 15);
      if (dev15) {
         unit = 'FizzBuzz';
      } else if (dev3) {
         unit = 'Fizz';
      } else if (dev5) {
         unit = 'Buzz';
      } else {
         unit = count;
      }
      console.log(unit);
   } while (count < 100);
}
fizzBuzz();
// Problem 2
// Program must check word, string or number
// if its elements' values are centrally simetrical
function isLucky (myString) {
   const initString = myString;
   let bulResult = false; let resultExp = '';
   const strArray = String(initString).split('');// modify initString to string data type and fill in the array where elements are symbols of initString
   const strLength = strArray.length;// strLength = number of elements in strArray
   // let loopSelector=Number.isInteger(strLength/2);// even=true; odd=false
   let i = 0;// When we compare two different elements out of the array we'll need some indicators to do so
   let j = strLength - 1;
   if (((typeof (initString) === 'string') || (typeof (initString) === 'number')) && (typeof (initString) !== 'object')) {
      do {
         if (strArray[i] === strArray[j]) {
            bulResult = true; // we should continue checking other pairs of symbols
            i = i + 1;
            j = j - 1;
         } else {
            bulResult = false; // here we can stop since there's no sense to continue, we already know that's not gonna happen
            i = j + 1;
         }
      } while (i < j);
      if (bulResult === true) {
         resultExp = 'Yes, you are lucky! Your expression is centrally symmetrical!';
      } else {
         resultExp = 'No, not at this time...';
      }
      console.log('Your array has the next following elements: ' + strArray);// array output
      console.log('The length of your array or number of its symbols is: ' + strLength);// output
      console.log(resultExp);
   } else {
      console.log('Please, try string or number only');
   }
}
isLucky(34543);
isLucky('ertre');
isLucky('abba');
isLucky('tyuio');
isLucky('trewqp');
isLucky([1, 2, 1]);
isLucky({ toString: () => 'aaa' });
