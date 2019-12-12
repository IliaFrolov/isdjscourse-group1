// Palindrome

function palindrome (str) {
   if (typeof str !== 'string') {
      return console.log('Error input, please to correct check your request enter in string format example "your word or number"');
   };
   if (typeof str === 'string') {
      str = str.toLowerCase().replace(/ /g, '');
   }

   const arr = str.split('');
   let textShift = '';
   let textPop = '';

   for (let i = 0; i < arr.length; i++) {
      textShift += arr.shift();
      textPop += arr.pop();
   }

   if (textShift === textPop) {
      return true;
   } else {
      return false;
   }
}

palindrome('Anna an na');

// FizzBuzz

for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
   } else if (i % 3 === 0) {
      console.log('Fizz');
   } else if (i % 5 === 0) {
      console.log('Buzz');
   } else {
      console.log(i);
   }
}
