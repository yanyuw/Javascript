const unique = (arr) => /*TODO*/
{
    var tmp = {}, array = [];
    for(var i = 0; i < arr.length; i++){
        if(array.indexOf(arr[i]) == -1){
            array.push(arr[i]);
        }
    }
    return array;
}
// console.log(unique([0, 1, 2, 2, 3, 3, 4])); // [0, 1, 2, 3, 4]
// console.log(unique([0, 1, '1', '1', 2])) // [0, 1, '1', 2]