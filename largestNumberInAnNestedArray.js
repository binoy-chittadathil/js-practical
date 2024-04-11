// largest number in an nested array

nestArray=[[1,2,10,200,70,40],[30,3,60,8,100,12],[80,60,20,322,68]]
let largest=nestArray[0][0]

function findLargest(nesArr){
    for(let arr of nesArr){
        for(let item of arr){
            if(item>largest){
                largest=item
            }
        }
    }
    return largest
}

console.log(findLargest(nestArray));