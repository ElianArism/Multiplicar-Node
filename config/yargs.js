const opts = [ //opt = opciones/configuraciones de los comandos
    //configuracion comando listar
    {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    },
    //configuarcion comando crear
    {
        base: {
            demand: true,
            alias: 'b',
            default: 1
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }


];
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts[0])
    .command('crear', 'Crea un .txt de una tabla de multiplicar', opts[1])
    .help()
    .argv;




module.exports = {
    argv
}