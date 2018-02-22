const getPageTags = () =>
{
    var tags = document.getElementsByTagName('*'); //获取页面所有元素
    var tagarr = [];
    for(var i = 0; i < tags.length; i++){
        var tmp = tags[i].tagName;
        if(tagarr.indexOf(tmp) == -1){
            tagarr.push(tmp);
        }
    }
    return tagarr;
}