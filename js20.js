const rob = (nums) => /* TODO */ 
{
    var pre = cur = 0;
    nums.forEach(function(value){
        var tmp = cur;
        cur = Math.max(pre + value,cur); 
        pre = tmp;
    })
    return cur;
}

// f(k) = max(f(k – 2) + kv, f(k – 1))
// f(k)是到第k家时的最佳选择，kv是第k家的值