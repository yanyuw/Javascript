/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    function sortNumber(a,b){
        return a - b
    };
    nums.sort(sortNumber);
    var len = nums.length;
    for(var i = 0; i < len - 2; i++){
        if(nums[i] > 0){
            break;
        }
        var j = i + 1; k = len - 1;
        while(j < k){
            var a = nums[i], b = nums[j], c = nums[k];
            var sum = a + b + c;
            if(sum < 0){
                j++;
            }
            else if(sum > 0){
                k--;
            }
            else{
                result.push([a,b,c]);
                while(nums[j] == b && j < k){
                    j++;
                }
                while(nums[k] == c && j < k){
                    k--;
                }
            }
        }
        while(nums[i + 1] == nums[i] && i < len - 2){
            i++;
        }
    }
    return result;
};

// https://leetcode.com/problems/3sum/description/