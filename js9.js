const uniqueNums = (n) => /* TODO */
{
    var arr = [];
    for(var i = 0; i < n; i++){
        var tmp = Math.ceil(Math.random() * 31 + 1);
        if(arr.indexOf(tmp) == -1){
            arr.push(tmp);
        }
        else{
            n++;
        }
    }
    return arr;
}