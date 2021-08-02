const fs = require('fs');

const archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function (){
        const arregloEnJSON = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(arregloEnJSON);
    }
}

module.exports = archivoTareas