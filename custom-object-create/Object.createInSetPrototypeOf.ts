// Необходимо написать аналог Object.create с использованием Object.setPrototypeOf

function objectCreate(obj) {
  return Object.setPrototypeOf({}, obj);
}

console.log(objectCreate({ a: 1 }));
