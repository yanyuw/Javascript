function duplicates(arr) {
    var array = [];
    arr.sort();
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i + 1]){
            if(array.indexOf(arr[i]) == -1){
                array.push(arr[i]);
            }
        }
    }
    return array;
}