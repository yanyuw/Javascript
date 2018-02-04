const parseData = (data) => /* TODO */
{
    var arr = []; 
    data.rows.map(function(row){ 
        var obj = {};
        data.metaData.map(function(meta,i){
            obj[meta.name] = row[i]; 
        })
        arr.push(obj);
    })
    return arr;
}