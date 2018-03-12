var primeN = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var primeRootN = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeN(5));
console.log(primeRootN(1));