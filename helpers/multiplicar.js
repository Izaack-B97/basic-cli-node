const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    
    try {
        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i } \n`; 
            consola += `${ base } ${ colors.green('x') } ${ i } = ${ base * i } \n`; 
        }

        console.clear();
        if ( listar ) {    
            console.log(colors.blue('========================='))
            console.log( colors.blue.underline(`Tabla de ${ base }`))
            console.log(colors.blue('========================='))
            console.log( consola );
        }

        fs.writeFileSync( `./files/tabla-${ base }.txt`, salida )

        return colors.rainbow(`tabla-${ base }.txt fue creado`);
    } catch (error) {
        throw error;
    }
    
};

module.exports = {
    crearArchivo
};