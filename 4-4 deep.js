function deepEqual(a,b){
    if(a === b){
        return true;
    }
    if(typeof(a) == "object" && a != null && typeof(b) == "object" && b != null){
        var counta = 0,countb = 0;
        for(var count in a){
            counta++;
        }
        for(var count in b){
            countb++;
        }
        if(counta != countb){
            return false;
        }
        else{
            for(var count in a){
                if(!(count in b) || !deepEqual(a[count],b[count])){
                    return false;
                }
            }
        }
        return true;

    }
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true