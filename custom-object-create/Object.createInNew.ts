// Необходимо написать аналог Object.create с использованием new function

function objectCreate(obj) {
  const createObj = function () {};
  createObj.prototype = obj;
  return new createObj();
}

console.log(objectCreate({ a: 1 }));
//master111
//master222
//master333
//new master