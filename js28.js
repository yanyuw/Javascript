/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var tmp = [];
    function queen(a,cur){
        if(cur == a.length){
            tmp = tmp.concat(a); //用push会覆盖 //?
            return;
        }
        for(var i = 0; i < a.length; i++){
            a[cur] = i;
            var flag = true;
            for(var j = 0; j < cur; j++){ //检查之前棋子和目前棋子是否满足条件
                if(a[cur] == a[j] || Math.abs(a[cur] - a[j]) == cur - j){
                    flag = false;
                    break; //不满足条件
                }
            }
            if(flag){
                queen(a,cur+1);
            }
        }
    }
    var a = [];
    for(var i = 0; i < n; i++){
        a[i] = 0;
    }
    queen(a,0);
    var result = tmp.length / n;
    return result;
};
// 思路同27 leetcode测试通过：https://leetcode.com/problems/n-queens-ii/description/