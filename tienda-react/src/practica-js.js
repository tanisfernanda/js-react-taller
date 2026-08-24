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

const hayAgotados = productos.some(producto => producto.stock === 0);
console.log(hayAgotados);

const hayMasDeUnMillon = productos.some(producto => producto.precio > 1000000);
console.log(hayMasDeUnMillon);

const preciosMayoresAZero = productos.every(producto => producto.precio > 0);
console.log(preciosMayoresAZero);

const stockValido = productos.every(producto => producto.stock >= 0);
console.log(stockValido);

const valorInventario = productos.reduce(
  (total, producto) => total + (producto.precio * producto.stock),
  0
);
console.log(valorInventario);