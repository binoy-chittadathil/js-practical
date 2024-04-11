let fibnocci=[0,1]
limit=10

function getFibnocci(limi){
    if(limi===1){
        return [0]
    }else if(limi===2){
        return fibnocci
    }else{
        for(let i=3;i<=limi;i++){
            let nextFib=fibnocci[fibnocci.length-1]+fibnocci[fibnocci.length-2]
            fibnocci.push(nextFib)
        }
        return fibnocci
    }
}

console.log(getFibnocci(10));