
function suma(a, b) {
  const suma = a + b;
  return suma;
}

function resta(a, b) {
  const resta = a - b;
  return resta;
}

function multiplicacion(a, b) {
  const multiplicacion = a * b;
  return multiplicacion;
}

function dividir(a, b) {
  const dividir = a / b;
  return dividir;
}


function calcularPromedio(nota1, nota2, nota3) {
  const promedio = nota1 + nota2 + nota3;
  const totales = promedio / 3;
  return totales;
}




console.log("Suma:", suma(10, 5));
console.log("Resta:", resta(10, 5));
console.log("Multiplicación:", multiplicacion(10, 5));
console.log("División:", dividir(10, 5));
console.log("Promedio:", calcularPromedio(4.0, 3.5, 5.0));


/* 
 Pregunta de control:
console.log(): imprime o muestra un valor en la consola del terminal 
para que el desarrollador pueda verlo. No afecta la ejecución del código ni guarda el resultado.
return: Es una instrucción dentro de una función que especifica qué valor devuelve 
esa función al código que la llamó, permitiendo guardar ese resultado en una variable o usarlo en otra operación.
*/

