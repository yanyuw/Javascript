Map.prototype.filterKeys = function(fn) {
  return new Map([...this].filter(([k, v]) => fn(k)));
}
// function([k,v]){
//    fn(k)
// }

Map.prototype.filterValues = function(fn) {
  return new Map([...this].filter(([k, v]) => fn(v)));
}

// ?