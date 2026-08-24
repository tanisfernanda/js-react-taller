const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Diademas', precio: 120000, categoria: 'Perifericos', stock: 8 },
  { id: 5, nombre: 'Silla Gamer', precio: 450000, categoria: 'Mobiliario', stock: 0 },
  { id: 6, nombre: 'Escritorio', precio: 300000, categoria: 'Mobiliario', stock: 4 },
  { id: 7, nombre: 'Webcam', precio: 85000, categoria: 'Perifericos', stock: 10 },
  { id: 8, nombre: 'Televisor 50"', precio: 1200000, categoria: 'Pantallas', stock: 2 },
  { id: 9, nombre: 'Pad Mouse', precio: 35000, categoria: 'Perifericos', stock: 15 },
  { id: 10, nombre: 'Soporte Monitor', precio: 110000, categoria: 'Accesorios', stock: 6 }
];

const mayorA100k = productos.filter(producto => producto.precio > 100000);
console.log(mayorA100k);

const entre50kY200k = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
console.log(entre50kY200k);

const categoriaPerifericos = productos.filter(producto => producto.categoria === 'Perifericos');
console.log(categoriaPerifericos);

const producto5 = productos.find(producto => producto.id === 5);
console.log(producto5);

const buscarProducto = id => productos.find(producto => producto.id === id);
console.log(buscarProducto(5));