//const argv = require('yargs').argv;
const { argv } = require('./config/yargs');
const por_hacer = require('./por_hacer/por_hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = por_hacer.crear(argv.descripcion);
        console.log(argv.descripcion);
        console.log(tarea);

        break;
    case 'listar':
        let listado = por_hacer.getListado();

        console.log("=======POR HACER ======".green);
        for (let tarea of listado) {
            console.log('Tarea: ', tarea.description);
            console.log("Estado; ", tarea.completado);
            console.log("__________________________");
        }
        console.log("=======================".green);

        break;
    case 'actualizar':
        let actualizado = por_hacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);

        break;
    case 'borrar':
        let borrado = por_hacer.borrar(argv.descripcion)
        console.log(borrado);
        break;
    default:
}