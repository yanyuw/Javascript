function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
var group = {};
ancestry.forEach(function(person){
    var i = Math.ceil(person.died / 100);
    if(group[i] == null){
        group[i] = [];
    }
    group[i].push(person.died - person.born);
})
for(i in group){
    console.log(i+": "+average(group[i]));
}
  
  // Your code here.
  
  // → 16: 43.5
  //   17: 51.2
  //   18: 52.8
  //   19: 54.8
  //   20: 84.7
  //   21: 94