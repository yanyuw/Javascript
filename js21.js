const compose = (...fn) => {
  return (x) => {
    while(fn.length){
        x = fn.pop()(x);
    }
    return x;
  }
}