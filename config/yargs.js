const opciones_regulares = {
    base: {
            demand: true,
            alias: 'b'            
        },
        limite: {
            default: 10,
            alias: 'l'           
        }
};

const yargs = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar',opciones_regulares)
    .command('crear', 'crear la tabla de multiplicar de acuerdo a la base y limite dado',opciones_regulares)
    .help()
    .argv;
    
    
module.exports = {
    yargs
}