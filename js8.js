const extractStr = (str) => /* TODO */
{
    var arr = [];
    var marr = str.split('.').slice(0,-1) //slice把最后一个空数组筛掉
    marr.forEach(function(cur){
        var tmp = cur.split(':').slice(0);
        if(tmp != null && cur.lastIndexOf(":") != -1){
            arr.push(tmp[tmp.length - 1]); 
        }
        
    })
    return arr;
}
// var str ='My name is:Jerry. My age is:12.';
// console.log(extractStr(str))