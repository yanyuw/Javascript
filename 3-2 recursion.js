function isEven(num){
    if(num < 0){
        num = -num;
    }
    if(num == 0){
        return true;
    }
    else if(num == 1){
        return false;
    }
    else{
        return isEven(num - 2);
    }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??