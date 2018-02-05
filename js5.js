function *flatten2 (arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] instanceof Array){
            yield* flatten2(arr[i]);
        }
        else{
            yield arr[i];
        }
    }
}
const numbers = flatten2([1, [[2], 3, 4], 5])
console.log(numbers.next().value) // 1
console.log(numbers.next().value) // 2
console.log(numbers.next().value) // 3
console.log(numbers.next().value) // 4
console.log(numbers.next().value) // 5