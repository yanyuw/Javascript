/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arr = [],i = 0; j = 0;
    if(nums1.length == 0 || nums2.length == 0){
        return arr;
    }
    function sortNumber(a,b)
    {
        return a - b
    }
    var arr1 = nums1.sort(sortNumber);
    var arr2 = nums2.sort(sortNumber);
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
    return arr;
};