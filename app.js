//Requireds 

const argv = require('./config/yargs').argv; // cargando solo el argv del modulo yargs
const colores = require('colors/safe');
const { createMultiplicationTable, listarTabla } = require('./multiply/multiply'); // uso destructuracion para obtener distintos metodos 


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        createMultiplicationTable(argv.base, argv.limite)
            .then(nameFile => {
                console.log(`se creo satisfactoriamente el archivo: `, colores.bgBlue(colores.black(nameFile)));
            }).catch(err => {
                console.log(err);
            })

        break;

    default:
        console.log(`Comando no reconocido`);


}