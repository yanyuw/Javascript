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

//?