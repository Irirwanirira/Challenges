const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = []

function isPrimeNumber(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}

function getPrimeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (isPrimeNumber(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}

let primeNumbers = getPrimeNumbers(arr)

console.log(primeNumbers)


