var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(x,y){
    return x.concat(y);
}));
// → [1, 2, 3, 4, 5, 6]