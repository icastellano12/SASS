const galeria = document.getElementById("galeria")
console.log(galeria);

let productos= [
  {nombre: "Chipa", precio: 1700, img: "/imagenes/Productos/IVA_9790.jpg"},
  {nombre: "Medialunas", precio: 100, img: "/imagenes/Productos/IVA_0063.jpg"},
  {nombre: "Pan", precio: 500, img: "/imagenes/Productos/pan.jpeg"  },
  {nombre: "Pepas", precio: 1700, img: "/imagenes/Productos/pepas.jpg"},
  {nombre: "Alfajores", precio: 80, img: "/imagenes/Productos/IVA_9831.jpg"},
];

productos.forEach (producto => {
let productosVentas = document.createElement ("galeria");
 productosVentas.innerHTML = `
  <div class="card col-lg-4 col-md-6 col-sm-12">
    <img src="${producto.img}" class="card-img-top" alt="Galeria imagen">
      <div class="card-body">
        <p class="card-text"> ${producto.nombre}: $${producto.precio}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>
  </div>
`;
galeria.append(productosVentas);
});



/* const nav =document.getElementById("img");
nav.setAttribute("src","../imagenes/carrito-de-compras.png"); */

/* const productos= [
  {id: 1, name: "chipa", precio: 1700},
  {id: 2, name: "medialunas", precio: 100},
  {id: 3, name: "Pan", precio: 500},
  {id: 4, name: "Pepas", precio: 1700},
  {id: 5, name: "alfajores", precio: 80},
];

alert ("Lista de productos \n\nChipa $170 \nMedialunas $100 \nPan $500 \nPepas $1700 \nAlfajores $80");
let precio = parseInt (prompt("Ingrese el precio minimo de los productos que desea aumentar el 20%"));
const filtrados= productos.filter ((producto) => producto.precio > precio);
filtrados.forEach((item) => {
  let mensaje = `
nombre: ${item.name}
$${item.precio + item.precio * 0.2}
`;

console.log(mensaje);

//alert(mensaje);

}); */


/* let name = prompt("Ingrese el nombre del producto que desea aumentar de precio");
let encontrado = productos.find(producto => producto.name === name);
let mensaje = `
  nombre: ${encontrado.name}
  $${encontrado.precio + encontrado.precio * 0.2}
 `;

  alert(mensaje);
 */

  


/* const productos= [
  {id: 1, name: "chipa", precio: 1700},
  {id: 2, name: "medialunas", precio: 100},
  {id: 3, name: "Pan", precio: 500},
];

let cant = prompt ("cantidad de productos que desea agregar");
let i = 1;
while (i <=cant){
  const nuevoName = prompt ("Ingrese nombre del producto");
  const nuevoPrecio = parseInt (prompt ("Ingrese precio"));
  
  productos.push ({id: productos.length + 1, name: nuevoName, precio: nuevoPrecio});
    i=i+1;
}

console.log (productos); */

//alert(JSON.stringify(productos));

/* let gastoTotal = 0;
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

 */