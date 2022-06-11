// es11 - junio 2020

// Dynamic import 
const button = document.getElementById('btn');

button.addEventListener('click', async function() {
    const module = await import("./file.js");
    module.hello();
})

// Un pinche núermo enorme
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt( aBigNumber );
console.log( aBigNumber );
console.log( anotherBigNumber );

// Promise allSettled
const promise1 = new Promise(( resolve, reject ) => reject("Te abrimos bro..."));
const promise2 = new Promise(( resolve, reject ) => resolve("Lo lograste culo.."));
const promise3 = new Promise(( resolve, reject ) => resolve("Culito"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log( response ));



// GlobalThis 
console.log( window );
console.log( globalThis );


// Operador nulo o indefinido
const fooo = 'Estamos vivos' ?? 'no me estes mamando';
console.log( fooo );

// Optional 
const user = {};
// console.log( user?.profile?.email );

 ( user?.profile?.email ) 
    ? console.log( 'tenemos un email' )
    : console.log( 'Bro te estas cagando afuera del hoyo');



