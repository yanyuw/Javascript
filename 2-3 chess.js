var i,j,size = 8,flag = 1;

for(i = 0; i < size; i++){
    var string = "";
    for(j = 0; j < size; j++){
        if(flag){
            string += " ";
            flag = !flag;
        }
        else{
            string += "#";
            flag = !flag;
        }
    }
    flag = !flag;
    console.log(string);
}