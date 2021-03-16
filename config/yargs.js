const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', { // Opciones de la bansera
                    alias: 'base',
                    type: 'number',
                    demandOption: true, // Parametro requerido,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en la consola'
                })
                .check(( argv, options ) => { // Verifica o valida errores
                    if ( isNaN( argv.b ) ) throw 'La base tiene que ser un numero';
                    return true;
                })
                .argv;


module.exports = argv;