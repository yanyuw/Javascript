const merge = (arr) => /* TODO */
{
    var i = arr.length / 2;
    var arr1 = arr.slice(0,i), arr2 = arr.slice(i);
    // console.log(arr1 + "\n" + arr2);
    var j = k = l = 0;
    while(j < arr1.length || k < arr2.length){
        if(j == arr1.length){
            arr[l] = arr2[k];
            k++;
            l++;
        }
        else if(k == arr2.length){
            arr[l] = arr1[j];
            j++;
            l++;
        }
        else{
            if(arr1[j] < arr2[k]){
                arr[l] = arr1[j];
                j++;
                l++;
            }
            else{
                arr[l] = arr2[k];
                k++;
                l++;
            }
        }
    }
}
// var array = [1, 5, 10, 11, 3, 4, 8, 12, 30];
// merge(array);
// console.log(array);

