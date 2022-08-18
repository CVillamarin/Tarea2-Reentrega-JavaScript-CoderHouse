class Impresiones{
    constructor(id,nombre,precio){
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
}

let impresiones1 = new Impresiones("776493","LLaveros customisables",450)
let impresiones2 = new Impresiones("449583", "Pastilleros",500)
let impresiones3 = new Impresiones("155368", "Lapiceros",675)

const producto = []

producto.push(impresiones1)
producto.push(impresiones2)
producto.push(impresiones3)

function comprar(){
alert("De momento tenemos los siguientes articulos: ");
producto.forEach(productos=>alert(productos.nombre));
let carrito=prompt("Que articulo queres?");
const encontrado=producto.find(productos=>productos.nombre == carrito);
alert("Genial,nos encargaremos de hacer tu orden de "+(encontrado.nombre)+" de inmediato,el precio sera de "+(encontrado.precio)+"$");

}
comprar()
