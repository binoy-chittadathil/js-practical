str='malayalamZ'

function checkPalindrome(string){
    let reverseStr=string.split('').reverse().join('')
    return string===reverseStr
}

console.log(checkPalindrome(str));