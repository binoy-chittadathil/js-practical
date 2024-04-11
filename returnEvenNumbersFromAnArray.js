const array=[10,20,17,15,21,30,48,72]

function getEvenNumber(arr){
    const even=arr.filter(item=>item%2===0)
    return even
}

console.log(getEvenNumber(array));