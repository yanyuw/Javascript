function countChar(string,ch){
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i) == ch){
            count++;
        }
    }
    return count;
}

function countBs(string){
    return countChar(string,'B');
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4