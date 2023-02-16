let productos = [
    
    {nombre: 'Garrafon 80L', marca: 'Ciel', stock: 4, precio: 59},
    {nombre: 'Ocho pack de jugos', marca: 'Jumex', stock: 80, precio: 199},
    {nombre: 'Veinticuatro pack de jugos', marca: 'delValle', stock: 150, precio: 299.99},
    {nombre: 'Botella de Agua', marca: 'Bonafont', stock: 98, precio: 9.99},
    {nombre: 'Paquete de 2 botanas', marca: 'Sabritas', stock: 3, precio: 80.50},
]

console.log('1. Marca y Stock');
productos.forEach(datoProd =>{
    console.log('El producto es ' + datoProd.nombre + ' de la marca ' + datoProd.marca + ' y su stock es de ' + datoProd.stock);
})

console.log('2. Precios mayores a 200');
let precioProd = productos.filter(elemento => elemento.precio >= 200)
console.log(precioProd);

console.log('3. Promedio de Productos');
const preciosProd = productos.map(elemento => elemento.precio)
console.log(preciosProd);

let suma = preciosProd.reduce((anterior,actual) => anterior + actual)
console.log(suma/productos.length);

console.log('4. Alfabéticamente');
productos.sort((a, b) => {
    if(a.nombre==b.nombre){
        return 0;
    }
    if(a.nombre<b.nombre){
        return -1;
    }
    return 1;
});
console.log(productos);

console.log('5.1. Producto con mayor precio');
productos.sort((a,b) =>{
    if(a.precio == b.precio){
        return 0;
    }
    if(b.precio < a.precio){
        return -1;
    }
    return 1;
});
console.log(productos[0]);

console.log('5.2. Productos Redondeados');
productos.forEach(datoProd =>{
    console.log('El producto es ' + datoProd.nombre + ' y su precio redondeado es de ' + Math.round(datoProd.precio));
})