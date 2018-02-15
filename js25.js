/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function bsearch(arr,i,j,t){ //二分法
        var k = Math.floor(i + (j - i) / 2);
        if(i > j){
            return -1;
        }
        if(arr[k] == t){
            return k;
        }
        else if(nums[k] > t){
            return bsearch(arr, i, k - 1, t);
        }
        else{
            return bsearch(arr, k + 1, j, t);
        }
    }
    var index = bsearch(nums,0,nums.length-1,target);
    if(index == -1){ //不在数组内
        return [-1,-1];
    }
    var i = j = index;
    while(i > 0 && nums[i-1] == nums[index]){//向左扩大范围
        i--;
    }
    while(j < nums.length - 1 && nums[j+1] == nums[index]){
        j++;
    }
    return [i,j];
    
};

// var array = [5, 7, 7, 8, 8, 10];
// var target = 8;
// console.log(searchRange(array,target));

//https://leetcode.com/problems/search-for-a-range/description/