const fillEmpty = (arr) => /* TODO */
{
    // Array.from(arr).map((v,i) => { 
    //     if(!(i in arr)){ //空元素下标不在数组内
    //         arr[i] = 'Hello' 
    //     } 
    // })
    /*
        Array.from可以将数组空元素设为undefined 而map不对空数组执行函数
        所以Array.from(arr).map才会调用函数作用于原来的空元素
    */
    for(let i = 0; i < arr.length; i++){
        if(!(i in arr)){
            arr[i] = 'Hello';
        }
    }
}