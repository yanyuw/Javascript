const partition = (arr) => /* TODO */
{
  var first = arr[0];
  for(var i = 1; i < arr.length; i++){
      if(arr[i] < first){
          var j = i;
          while(arr[j - 1] >= first && j > -1){ //把小于first的一步步移到前面
              var tmp = arr[j];
              arr[j] = arr[j - 1];
              arr[j - 1] = tmp;
              j--;
          }
      }
  }
}
// const arr = [3, 1, 6, 2, 4, 5]
// partition(arr)
// console.log(arr) // => [2, 1, 3, 6, 4, 5]