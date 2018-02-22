/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var row = board[0].length, col = board.length, len = word.length;
    if(row === 0 || col === 0 || row * col < len){
        return false;
    }
    for(var i = 0; i < col; i++){
        for(var j = 0; j < row; j++){
            if(find(i,j,word)){
                return true;
            }
        }
    }
    return false;

    function find(c,r,w){
        var lenw = w.length;
        if(lenw === 0){ //搜索完毕
            return true;
        }
        if(r >= row || c >= col || c < 0 || r < 0 || board[c][r] != w.charAt(0)){ // 搜索超出范围 或者不是要找的字母
            return false;
        }
        w = w.substring(1); //去掉第一个字符
        var tmp = board[c][r];
        board[c][r] = '0';
        var result =  find(c+1,r,w) || find(c,r+1,w) || find(c-1,r,w) || find(c,r-1,w);
        board[c][r] = tmp;
        return result;
    }
};
// leetcode测试通过：https://leetcode.com/problems/word-search/description/