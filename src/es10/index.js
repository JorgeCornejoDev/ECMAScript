// es10 - junio 2019

let array = [ 1,,2,3, [ 1,2,3, [ 1,2,3 ]]];
console.log( array.flat(2));  // es para poder dar profundidad de los elementos que integran la matriz y/o array

let array2 = [1,2,3,4,5];
console.log( array2.flatMap( value => [value, value + 2]));


// Strings 

let hello = '         helloWorld';
console.log( hello );
console.log( hello.trimStart());

let hello2 = 'Hola Dios                 ';
console.log( hello2 );
console.log( hello2.trimEnd());


// Manera de manejar errores en try catch
// Se elimina el parametro del error 

// de un array a objetos
let entries = [["name", "oscar"],["age",35]];
console.log(Object.fromEntries( entries ));


// El objeto de tipo simbolo para poder accesar a una descripción
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log( symbol.description );