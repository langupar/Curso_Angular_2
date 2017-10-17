functionmsgAfterTimeout (msg, nombre, tiempo, cb) {
    setTimeout(function() {
        cb(msg, nombre);
    },tiempo);
};

let saludo = (`${msg}Hola ${nombre}!`);
msgAfterTimeout(saludo, "Juan", 200,
    let saludo = (`${msg}Hola ${nombre}!`)
console.log(`Saludo después de 0,3 seg: ${saludo}`);
} // Fin de la función callback
function(msg, nombre) {
); // Fin de la llamada a msgAfterTimeout
function(msg, nombre) {
} // Fin de la función callback
msgAfterTimeout("", "Pepe", 100,
); // Fin de la llamada a msgAfterTimeout