// capitalise first letter of a string

const string='binoy'

function capitaliseFirstLetter(str){
    return str.replace(str[0],str[0].toUpperCase())
    
}

console.log(capitaliseFirstLetter(string));