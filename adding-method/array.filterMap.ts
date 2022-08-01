// Необходимо добавить все массивам в JavaScript метод filterMap, который принимает 2 функции: фильтр и map

function filterMap(filter, map) {
  return this.filter(filter).map(map);
}

Array.prototype.filterMap = filterMap;

const result = [1, 2, 3, 4].filterMap(
  (el) => el > 2,
  (el) => el ** 2
);
console.log(result);
// [9, 16]
