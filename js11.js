/**
 * @param nums: The integer array you should partition
 * @param k: An integer
 * @return: The index after partition
 */
const partitionArray = function (nums, k) {
    function sortNumber(a,b)
    {
        return a - b
    }
    var arr = nums.sort(sortNumber);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= k){
            return i;
        }
    }
    return arr.length;

}