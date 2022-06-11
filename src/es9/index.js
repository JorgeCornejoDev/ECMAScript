// ES9 2018 - Principales caracteristicas 

// Operador de reposo, recupera los valores de un objeto sin ser creado 

const obj = {
    name: 'Jorge',
    age: 35,
    country: 'MX'
};

let { name, ...all } = obj;
console.log( name, all ); // mostramos la llave name aparte y el resto del objeto queda entero
console.log( all ); // estaríamos omitiendo la llave name y mostramos el resto del objeto


// Propiedades de propagación 

const obj2 = {
    name: 'Jorge',
    age: 35
};

const obj3 = {
    ...obj2,
    country: 'MX',
};

console.log( obj3 );


// Promise finally 

const helloWorld = () => {
    return new Promise(( resolve, reject) => {
        ( true )
            ? setTimeout(() => resolve('Hola Dios, soy yo de nuevo'), 3000)
            : reject( 'Lo siento señor jesucristo, te he fallado' )
    });
};

helloWorld()
    .then( response => console.log( response ))
    .catch( error => console.log( error ))
    .finally( () => setTimeout(() => console.log('Todo se ha terminado...'), 3000))

// REGEX 

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-04-01');
const year = match[1];
const month = match[2];
const day = match[3];

console.log( year, month, day );