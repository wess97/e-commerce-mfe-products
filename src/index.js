import faker from 'faker';

let products = '';

for(i = 0; i < 3; i++) {
  let name = faker.commerce.productName();
  products += `<div>${name }</div>`
}

console.log(products);