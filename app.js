const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

const [ , ,arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');
crearArchivo( base )
    .then(resp => console.log( resp ) )
    .catch(err => console.log( err ) );