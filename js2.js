Map.prototype.filterKeys = function(fn) { // 参数是一个函数！ 如(key) => key.startsWith('J')
  return new Map([...this].filter(([k, v]) => fn(k))); // [k,v]  如['Jerry', 12]
}
// function([k,v]){
//    fn(k)
// }

Map.prototype.filterValues = function(fn) {
  return new Map([...this].filter(([k, v]) => fn(v)));
}
