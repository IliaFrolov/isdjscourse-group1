<script>
// Palindrom
let str = '98789';
str = str.toLowerCase()
let arr = str.split('')
let textShift = ''
let textPop = ''
let res = ''
let i

for (i = 0; i < arr.length; i++) {
    textShift += arr.shift()
    textPop += arr.pop()
}

function palidrom() {
    if (textShift === textPop) {
        res = 'this word is palidrom'
    }
    else {
        res = 'this word is NOT palidrom'
    }
    
}

palidrom()

console.log(res)

//FizzBuzz

 for (let i = 1; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
         console.log('FizzBuzz')
     }
     else if (i % 3 === 0) {
        console.log('Fizz')
     }
     else if (i % 5 === 0) {
        console.log('Buzz')
     }
     else {
         console.log(i)
     }
 }


</script>
