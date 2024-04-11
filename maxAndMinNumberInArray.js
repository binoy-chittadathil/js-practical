const array=[10,20,30,80,15,2,70]

function maximumNumber(arr){
    return Math.max(...arr)
}

function minumumNumber(arr){
    return Math.min(...arr)
}

console.log(maximumNumber(array));
console.log(minumumNumber(array));