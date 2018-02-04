const unique = (arr) => /*TODO*/
{
    function isReapted(arr){
        var tmp = {};
        for(var i in arr){
            if(tmp[arr[i]]){
                return flase;
            }
            tmp[arr[i]] = false;
        }
        return true;
    }
    return array = arr.filter(isReapted(arr));

}