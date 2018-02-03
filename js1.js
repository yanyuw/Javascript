/**
 * @param k: An integer
 * @param n: An integer
 * @return: An integer denote the count of digit k in 1..n
 */

const digitCounts = function (k, n) {
    var count = 0;
    for(var i = 0; i <= n; i++){
        var string = new Number(i).toString();
        count += string.split(k).length - 1;
    }
    return count;
}

