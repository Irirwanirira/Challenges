
let reversed = '';

let reverseString = (str) => {
  for (let i = str.length-1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed;
}

let checkPalindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== reverseString(str)[i]) {
        return false;
        }
    }
    return true;
}

console.log(checkPalindrome('racecar'))




