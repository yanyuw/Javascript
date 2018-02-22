const safeGet = (data, path) => {
    var str = path.split(".");
    var tmp = data;
    for(var i = 0; i < str.length; i++){
        if(tmp[str[i]]){
            tmp = tmp[str[i]];
        }
        else{
            return undefined;
        }
    }
    return tmp;
}
