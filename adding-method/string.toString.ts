// Необходимо сделать конкретному массиву метод toString, который возвращает первый элемент .. последний.

function toString() {
  const first = this[0];
  const last = this[this.length - 1];

  if (this.length > 1) {
    return `${first}..${last}`;
  } else if (this.length) {
    return `${first}`;
  } else {
    return "";
  }
}

function addToString(arr) {
  arr.toString = toString;
  return arr;
}

// 1..4
console.log(addToString([1, 2, 3, 4]).toString());

// 1
console.log(addToString([1]).toString());

//
console.log(addToString([]).toString());
