// Palindrome

function palindrome (str) {
   str = str.toLowerCase();
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

palindrome('96588');

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
