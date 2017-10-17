// Ejemplo de código en TypeScript

interface DatosLibro {
    titulo: any;
    tematica: string;
    paginas: number;
    //autor?: string;
    isbn: string | number;
    mostrarDatos: Function;
    (iva:number): number;
}

class Libro implements DatosLibro {
    tematica;
    paginas;
    autor: {nombre: string, apellidos:string};
    isbn: string;
    titulo: string;

    constructor(tematica, paginas) {
        this.tematica = tematica;
        this.paginas = paginas;
    }

    calcularPrecio (iva:number):number {
        return 1;
    }
    mostrarDatos(){

    }

    prueba (): void {}
}

class LibroTecnico extends Libro {
    precio: number;
    capitulos: Array<string>;

    constructor(tematica, paginas, precio) {
        super(tematica, paginas);
        this.capitulos = [];
        this.precio = precio;
        // ...
    }

    // ...
    precioTotal(pValor: number = 1) {
        console.log(pValor * this.precio);
    }
}

let oLibro = new LibroTecnico("Informatica", 129, 30);

console.log(oLibro);
