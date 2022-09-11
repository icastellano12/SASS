let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;
let precioDesc = 0;


alert("Vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que sea una valor valido numerico");
alert("Si el total es mayor igual a $1500 se realiza descuento del 10%");

function ingresarPrecio() {
  precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":")); //parseInt, parsefloat, Number 

  while (precioProducto > 0) {
    gastoTotal = calcularTotal(precioProducto);
    contador++;
    precioProducto = Number(prompt("Ingrese el precio del producto" + (contador + 1) + ":"));
  }
  if (precioProducto <= 0 || isNaN(precioProducto)) {
    console.log(
      "Ha introducido un valor menor o igual a cero, tambien es posible que haya introducido un valor numerico no valido por lo cual hemos dejado de calcular el gasto total asumiendo que  desea abandonar el programa, gracias"
    );
  }
 if (gastoTotal >= 1500) {
    precioDesc = totalDesc(gastoTotal);
  } 
}

function calcularTotal(precioProducto) {
  return gastoTotal + precioProducto;
}

function totalDesc(gastoTotal) {
  return (gastoTotal -(gastoTotal*0.1));   
  }

function mostrarTotal() {
  console.log ("cantidad de productos: " + contador);
  console.log ("El precio total es $ " + gastoTotal);
  console.log ("El precio total con descuento es $ " + precioDesc);
}

ingresarPrecio();
mostrarTotal();
totalDesc();

