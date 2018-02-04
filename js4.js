const arrWithoutLoop = (n) => /* TODO */ 
{
    var array = [];
    function f(arr,i,n){
        arr.push(i);
        i++;
        if(i < n){
            return f(arr,i,n); //递归
        }
        else{
            return arr;
        }
    }
    if(n == 0){ //要输出[]不能输出[0](长度要为0)
        return array;
    }
    else{
        return f(array,0,n);
    }
}

// console.log(arrWithoutLoop(5)); //[0, 1, 2, 3, 4]
// console.log(arrWithoutLoop(0)); //[]

// function arrWithoutLoop(n){
//     return n <= 0 ? [] : arrWithoutLoop(n - 1).concat(n - 1);
// }