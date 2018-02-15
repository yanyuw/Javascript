/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    for(var i = 0; i < n / 2; i++){
        for(var j = i; j < n - 1 - i; j++){
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = tmp; 
        }
    }
};
// var matrix = [[1,2,3],[4,5,6],[7,8,9]];
// rotate(matrix);
// console.log(matrix);//[[7,4,1],[8,5,2],[9,6,3]]


//https://leetcode.com/problems/rotate-image/description/