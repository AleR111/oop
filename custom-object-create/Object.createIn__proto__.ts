// Необходимо написать аналог Object.create с использованием __proto__

function objectCreate(obj) {
  return { __proto__: obj };
}

console.log(objectCreate({ a: 1 }));
