const array = [1,2,3,4,5,6,7,8,9,0,12,1,3,3,44233,4,5,6,7,68,];

function isPrime(num){
    if(num< 1){
        return false
    }

    for(let i= 2; i<Math.sqrt(num); i++){
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function customSort(){
    for(let i=0; i < array.length -1; i++){
        for(let j=0; j< array.length -i -1; j++){
            if(array[j] < array[i]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j + 1] = temp;
            }
        }
    }

    for(let i = array.length - 1; i >=0; i--){
        if(isPrime(array[i])){
            array.splice(i, 1);
        }
    }
    return array;
}


