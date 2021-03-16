const { crearArchivo } = require("./helpers/multiplicar");
const argumento = require('./config/yargs');

console.clear();

// const [ , ,arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

console.log( argumento );

// console.log('base de yargs: ', argumento.base);

crearArchivo( argumento.b, argumento.l, argumento.h )
    .then(resp => console.log( resp ) )
    .catch(err => console.log( err ) );
	
