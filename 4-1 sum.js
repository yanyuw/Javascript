function range(start,end,step){
    var array = [];
    if(step == null){
        step = 1;
    }
    if(step > 0){
        for(var i = start; i <= end; i += step){
            array.push(i);
        }
    }
    else{
        for(var i = start; i >= end; i += step){
            array.push(i);
        }
    }
    return array;
}
function sum(array){
    var sum = 0;
    for(var i in array){
        sum += array[i];
    }
    return sum;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
