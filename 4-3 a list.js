function arrayToList(array){
    var list = null;
    for(var i = array.length - 1; i >= 0; i--){
        list = {
            value: array[i],
            rest: list,
        }
    }
    return list;
}
function listToArray(list){
    var array = [];
    for(var tmp = list; tmp != null; tmp = tmp.rest){
        array.push(tmp.value);
    }
    return array;
}
function prepend(element,list){
    var newlist = {
        value: element,
        rest: list,
    }
    return newlist;
}
function nth(list,num){
    var array = listToArray(list);
    return array[num];
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20