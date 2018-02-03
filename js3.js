const flatten = (arr) => /* TODO */
{
    return arr.reduce(function(flat,toflat){
        if(toflat instanceof Array){ //如果toflat的类型为数组则继续拍平
            return flat.concat(flatten(toflat)); // concat 用于连接两个或多个数组 返回新数组
        }
        else{
            return flat.concat(toflat);
        }
    },[])
}

// var arr = [[1, [[2], 3, 4], 5]];
// console.log(flatten(arr)); //[1, 2, 3, 4, 5]

