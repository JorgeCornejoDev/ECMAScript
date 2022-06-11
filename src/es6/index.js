
// Parametros por defecto

function newFunction( name, age, country) {
    var name = name || 'Jorge';
    var age = age || 35;
    var country = country || 'MX';

    console.log(name, age, country);

};

// es6 parametros por defecto
function newFunction2(name = 'Jorge', age = 35, country="MX"){
    console.log( name, age, country);
};

newFunction2();
newFunction2('Juan',30,'CO');

// Template literals 

let hello = "Hello";
let world = "Word";
let epicPhrase = hello + ' ' + world;
console.log( epicPhrase );

let newEpicPhrase = `${hello} ${world}`
console.log( newEpicPhrase );


// Comentarios multilínea
// Forma anterior
let lorem = "Esto es una línea \n"
+ "Aquí poniamos otra línea";

// es6
let lorem2 = `Esto es una línea
aquí colocamos otra línea`;

console.log( lorem );
console.log( lorem2 );


// Destructuración

{
    
    let person = {
        'name':'Joge Cornejo',
        'age':35,
        'country':'MX'
    };
    
    // Forma anterior
    console.log( person.name, person.age );
    
    // es6
    let { name, age } = person;
    console.log( name, age );

}

// Arreglos
let team1 = ['Jorge', 'Alberto', 'Ricardo'];
let team2 = ['Daniela', 'Georgina', 'Susana'];

let education = ['Juan', ...team1, ...team2 ];
console.log( education );

// Diferencia entre var y let 
{
    var globalVar = 'Global Var';
}
{
    let globalLet = 'Global let';
    console.log( globalLet );
}

console.log( globalVar );

// const 
const a = 'b';
a = 'c';
console.log( a ); // no esta permitido debido a que ya esta asignado un valor y no se puede sobre escribir

// Propiedad de objetos mejorados
{
    let name = 'Jorge';
    let age = 35;

    // vieja opción es5
    obj = { name: name, age: age };

    // es6
    obj2 = { name, age };
    console.log( obj2 );

}

{
    // arroy functions o funciones de flecha
    const names = [
        { name: 'Jorge', age: 35 },
        { name: 'Daniela', age:33 } 
    ]

    // es5
    let listOfNames = names.map( function ( item ) {
        console.log( item.name );
    });

    // es6
    let listOfNames2 = names.map( item => {
        console.log( item.age );
    });

    // formas de encontrar arroy functions 
    const listOfNames3 = ( name, age, country ) => {
        // aquí va nuestro bloque de código
    };

    const listOfNames4 = name => {
        // Aquí va otro bloque de código 
    };

    const square = num => num * num; 

}

{
    // Promesas para trabajar el asincronismo, se va ejecutando elementos por elementos
    const helloPromise = () => {
        return new Promise(( resolve, reject ) => {
            if( true ) {
                resolve('Lo lograste, estas a un paso de ser un campeón');
            } else {
                reject('Lo siento, estamos trabajando en mejorar tu experiencia');
            }
        })
    }

    helloPromise()
        .then( response => console.log( response))
        .then( () => console.log( "Aquí podemos colocar otra instrucción" ))
        .catch( error => console.log( error ));
}

{
    // Clases, formas de manejar objetos
    class Calculator {
        constructor() {
            this.valueA = 0;
            this.valueB = 0;
        }

        sum( valueA, valueB ){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new Calculator();
    console.log( calc.sum(1,2));

    
    
    
    
}

// import y export = trabajar con modulos
import { hello } from './module';
hello();


// Generators para controlar la logica en un algoritmo
function* helloWorld() {
    if ( true ) {
        yield 'Hello';
    }
    if ( true ) {
        yield 'World'
    }
};

const generatorHello = helloWorld();
console.log( generatorHello.next().value );
console.log( generatorHello.next().value );

