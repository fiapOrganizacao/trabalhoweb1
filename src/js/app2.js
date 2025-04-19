// Como usar operadores logicos 

// == igualdade valor 
// === igualdade estrita, valor e tipo 
// != diferente valor
// !== diferente estrito, valor e tipo 
// > maior que 
// < menor que 
// >= maior ou igual que 
// <= menor ou igual que

let a = 10;
let b = 20; 
let c = 30; 

// Operadores de comparação
// Operador de igualdade
console.log(a == b); // false
console.log (a == 10); // true
console.log (a == "10"); // true, pois o valor é igual

// Operador de igualdade estrita
console.log(a === b); // false
console.log (a === 10); // true
console.log (a === "10"); // false, pois o tipo é diferente

// Operador de diferença
console.log(a != b); // true
console.log(a != 10); // false
console.log(a != "10"); // false, pois o valor é igual

// Operador de diferença estrita
console.log(a !== b); // true
console.log(a !== 10); // false
console.log(a !== "10"); // true, pois o tipo é diferente

// Operador maior que
console.log(a > b); // false
console.log(a > 5); // true
console.log(a > 10); // false

// Operador menor que
console.log(a < b); // true
console.log(a < 5); // false
console.log(a < 10); // false