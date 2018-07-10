const fs = require('fs');

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, ///obligatorio
            alias: 'b' /// alias para el comando de consola
        },
        limite: {
            alias: 'l',
            default: 10 ///si nadie puso nada el limite sera 10
        }
    })
    .help()
    .argv;

const { Multiplicar } = require('./operaciones/multiplicar.js') ////DESPUES DE UNA CONST O UN LET ES UNA DESTRUCTURACION
const { Mostrar } = require('./operaciones/multiplicar.js')
    //////SOLO SACAMOS EL METODO

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        Mostrar(argv.base, argv.limite)
            .then(archivo => console.log(`archivo ${archivo} creado correctamente`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        console.log(argv.l);
        Multiplicar(argv.base, argv.l)
            .then(archivo => console.log(`archivo ${archivo} creado correctamente`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}