const number=12

function isPrime(num){
    if(num===1){
        return false
    }else if(num===2){
        return true
    }else if(num<1){
        console.log('give valid number');
    }else{
        for(i=2;i<=num/2;i++){
            if(num%i===0){
                return false
            }
        }
        return true
    }
}

console.log(isPrime(number));