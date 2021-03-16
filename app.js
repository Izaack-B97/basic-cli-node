const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('yargs').argv;

console.clear();

// const [ , ,arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

console.log( process.argv );
console.log( argv );

console.log('base de yargs: ', argv.base);

// crearArchivo( base )
//     .then(resp => console.log( resp ) )
//     .catch(err => console.log( err ) );
//     console.log('Hola mundo')
	
