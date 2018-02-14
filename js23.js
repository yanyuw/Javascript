/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var result,close;
    function sortNumber(a,b){
        return a - b
    };
    nums.sort(sortNumber);
    var len = nums.length;
    for(var i = 0; i < len - 2; i++){
        var j = i + 1; k = len - 1;
        if(i == 0){
            var tmp = nums[i] + nums[j] + nums[k];
            close = target > tmp ? target - tmp : tmp - target;
        }
        while(j < k){
            var a = nums[i], b = nums[j], c = nums[k];
            var sum = a + b + c;
            if(sum < target){
                if(target - sum <= close){
                    close = target - sum;
                    result = sum;
                }
                j++;
            }
            else if(sum > target){
                if(sum - target <= close){
                    close = sum - target;
                    result = sum;
                }
                k--;
            }
            else{
                close = 0;
                return target;
            }
        }
        while(nums[i + 1] == nums[i] && i < len - 2){
            i++;
        }
    }
    return result;
};

//https://leetcode.com/problems/3sum-closest/description/