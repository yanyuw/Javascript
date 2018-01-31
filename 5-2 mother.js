function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function mother(person){
    return byName[person.mother] != null; //母亲也在数组内
}
function age(person){
    return  person.born - byName[person.mother].born;
}

console.log(average(ancestry.filter(mother).map(age)))
// → 31.2