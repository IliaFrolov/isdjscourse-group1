<script>
// Palindrome

function palindrome(str) {

    str = str.toLowerCase()
    let arr = str.split('')
    let textShift = ''
    let textPop = ''
    let res = ''

    for (let i = 0; i < arr.length; i++) {
        textShift += arr.shift()
        textPop += arr.pop()
    }

    if (textShift === textPop) {
        res = 'this word is palindrome'
    }
    else {
        res = 'this word is NOT palindrome'
    }
    
}

palindrome('Annaanna')


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
