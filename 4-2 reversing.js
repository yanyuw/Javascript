function reverseArray(array){
    var newarray = [];
    for(var i in array){
        newarray[array.length - i - 1] = array[i];
    }
    return newarray;
}
function reverseArrayInPlace(array){
    var tmp;
    for(var i = 0; i < (array.length / 2); i++){
        tmp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tmp;
    }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]