const argv = require('yargs')
    .options({
        'b': {
        alias: 'base',
        demandOption: true,
        describe: 'Número base de la multiplicación',
        type: 'number'
        },
        'm': {
            alias: 'mostrar',
            demandOption: false,
            describe: 'Mostrar en pantalla la multiplicación',
            type: 'boolean'
        },
        'l': {
            alias: 'limite',
            demandOption: true,
            describe: 'Número limite a multiplicar con la base',
            type: 'number'
        }
    })
    .check((argv, options ) => {
        if ( isNaN(argv.b) ) throw "La base requiere ser un número";
        if ( isNaN(argv.l) ) throw "El limite requiere ser un número";
        return true;
    })
    .argv;
/*
//funciona tambien asi
module.exports = {
    argv
}*/
module.exports = argv; //exportacion por defecto