/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    function sortNumber(a,b)
    {
        return a - b
    }
    var arr1 = nums1.sort(sortNumber);
    var arr2 = nums2.sort(sortNumber);
    var arr = [],i = 0; j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] == arr2[j]){
            arr.push(arr1[i]);
            i++;
            j++;
        }
        else if(arr1[i] < arr2[j]){
            i++;
        }
        else{
            j++;
        }
    }
    function unique(arr){
        var tmp = {}, array = [];
        for(var i = 0; i < arr.length; i++){
            if(array.indexOf(arr[i]) == -1){
                array.push(arr[i]);
            }
        }
        return array;
    }
    return unique(arr);
};