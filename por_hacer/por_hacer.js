const fs = require('fs');
const colors = require('colors');


//ARREGLO DE TAREAS
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    })
}

const CargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    CargarDB();
    return listadoPorHacer;
}

const crear = (description) => {
    CargarDB(); //CARGAR DATOS DE LA BD - ARCHIVO JSON

    let porHacer = {
        description,
        completado: false,
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    CargarDB();

    let index = listadoPorHacer
        .findIndex(tarea => tarea.description === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    CargarDB();

    let index = listadoPorHacer
        .findIndex(tarea => tarea.description === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}