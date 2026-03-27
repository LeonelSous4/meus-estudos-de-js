// Closure → função lembrando escopo

function contador() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const c = contador();
console.log(c()); // 1
console.log(c()); // 2
