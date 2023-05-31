//Importando paquete Lodash y Variables
const lodash = require("lodash");
const { autos, animales } = require("./datos");

const autosUnicos = lodash.uniq(autos);

// find() solo encuentra el primer elemento que cumpla con la condicion, para presentarlos todos se necesita otro metodo.
const animalSalvaje = lodash.find(animales, { tipo: "salvaje" });

console.log(autosUnicos);
console.log(animalSalvaje);
