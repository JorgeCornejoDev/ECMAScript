// es8 -> 2017

// Object entries
const data = {
    frontend: 'Jorge',
    backend: 'Alberto',
    design: 'Daniela'
};

const entries  = Object.entries( data );
console.log( entries );
console.log( entries.length );


// Object values
const data2 = {
    frontend: 'Jorge',
    backend: 'Alberto',
    design: 'Daniela',
};

const values = Object.values( data2 );
console.log( values );
console.log( values.length );


// Conocer el Padding (agregar cadenas de texto vacias)
const string = 'Hello';
console.log( string.padStart(7,'Hi'));
console.log( string.padEnd(12, ' -----'));
console.log( 'food'.padEnd(12, ' -----'));


// Asyn - Await 

const helloWorld = () => {
    return new Promise(( resolve, reject ) => {
      ( false ) 
        ? setTimeout(() => { resolve(' Hello world' ) }, 3000)
        : reject( new Error('El test fallo' ))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log( hello );
}
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log( hello );
    }catch ( error ) {
        console.log( error );
    }
}

anotherFunction();
