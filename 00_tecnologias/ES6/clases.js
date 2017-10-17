// Ejemplo de código en ES6

classLibro {
    constructor(tematica, paginas) {
        this.tematica = tematica;
        this.paginas = paginas;
    }
}

classLibroTecnico extends Libro {
    
    constructor(tematica, paginas, precio) {
        super(tematica, paginas);
        this.capitulos = [];
        this.precio = precio;
        // ...
    }

    // ...
    precioTotal(pValor = "foo") {
        console.log(pValor * precio);
    }
}

oLibro = new LibroTecnico("Informatica", 129, 30);

console.log(oLibro);
