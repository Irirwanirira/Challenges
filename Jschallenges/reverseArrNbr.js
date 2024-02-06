
let reverseArr = []
const reverseArrNb =(arr)=> {
    let i = arr.length-1;
    do {
        reverseArr.push(arr[i])
        i--
    } while (i >= 0)

}
console.log(reverseArrNb([1,2,3,4,5,6,7,8,9,10]))