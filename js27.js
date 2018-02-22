//即任意两个皇后不得处于同一行，同一列或一条对角线上。
//定义一个长度为n的数组a，a[i] = j 表示棋子在（i,j) 
var solveNQueens = function(n) {
    var result = [];
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
    // console.log(tmp);

    while(tmp.length){ 
        var sol = [];
        for(var j = 0; j < n; j++){
            var str = '';
            var q = tmp.shift();
            for(var k = 0; k < n; k++){
                if(k == q){
                    str = str + 'Q';
                }
                else{
                    str = str + '.';
                }
            }
            sol.push(str);
        }
        result.push(sol);
    }
    // console.log(result);
    return result;

};

// leetcode测试通过：https://leetcode.com/problems/n-queens/description/