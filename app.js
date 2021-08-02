const fs = require('fs');

let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');

let tareas = JSON.parse(tareasJSON);
console.log(tareas);