//CONFIGURACION

const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    demand: true,
    alias: 'c',
};

argv = require('yargs')
    .command('Crear', 'Crea un elemento por hacer', { descripcion })
    .command('Actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('Borrar', 'Elimina un elemento del la BD', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}