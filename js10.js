/**
 * @param A: sorted integer array A
 * @param B: sorted integer array B
 * @return: A new sorted integer array
 */
function sortNumber(a,b)
{
return a - b
}
const mergeSortedArray = function (A, B) {
    var arr = A.concat(B);
    return arr.sort(sortNumber);
}

// var A = [1,2,3];
// var B = [2,4,5,6];
// console.log(mergeSortedArray(A,B));