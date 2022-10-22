// const {argv}= require ('./config/yargs'); //tambien funciona asi
const argv = require ('./config/yargs');
const {crearTabla} = require('./helpers/crearTabla');


console.clear();
crearTabla(argv.base,argv.mostrar,argv.limite)
    .then(msg=>console.log(msg))
    .catch(err=>console.log(err));


