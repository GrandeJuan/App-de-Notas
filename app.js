let archivoTareas = require('./funcionesDeTareas');

let argumentosFiltro = process.argv[2];

switch (argumentosFiltro) {
    case 'listar':
        console.log('Listado de tareas')
        let tareas = archivoTareas.leerJSON;
        for (let i = 0; i < tareas.length; i++) {
            console.log(i + ', ' + tareas[i].tiulo + ' - ' + tareas[i].estado);
        }
        break;

    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;

    default:
        console.log('No entiendo qué querés hacer');
        break;
};