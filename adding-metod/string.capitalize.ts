// Необходимо добавить все строкам в JavaScript метод capitalize, который делает первую букву в строке заглавной

function capitalize() {
  return `${this[0].toUpperCase()}${this.slice(1, this.length)}`;
}

String.prototype.capitalize = capitalize;

console.log("foo".capitalize()); // Foo
