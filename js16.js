const isAnagram = (str1, str2) => /* TODO */
{
    if(str1.length != str2.length){
        return false;
    }
    else{
        if(str1.split("").sort().join("") == str2.split("").sort().join("")){
            return true;
        }
        //先分割成独立的字母再排序 然后组合
    }
}