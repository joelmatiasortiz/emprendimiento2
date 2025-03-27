let edad = 25;
let nombre = "Joel";
let esEstudiante = true;

console.log("Edad:", edad);
console.log("Nombre:", nombre);
console.log("¿Es estudiante?", esEstudiante);

function calcularPrecio() {
  const tipoMueble = parseInt(document.getElementById("tipoMueble").value);
  const tamanoMueble = parseInt(document.getElementById("tamanoMueble").value);
  const seguroFlete = document.getElementById("flete").checked;
  const distancia = parseInt(document.getElementById("distancia").value);

  const costoFleteBase = 50;
  const costoSeguro = 30;

  let precioMueble = tipoMueble + tamanoMueble;
  let costoFlete = costoFleteBase + distancia * 0.5;

  if (seguroFlete) {
    costoFlete += costoSeguro;
  }

  const precioTotal = precioMueble + costoFlete;

  document.getElementById("precioTotal").textContent = precioTotal.toFixed(2);
}

const muebles = [
  { nombre: "Mesa de Madera", precio: 300, tipo: "Mesa" },
  { nombre: "Silla de Oficina", precio: 150, tipo: "Silla" },
  { nombre: "Estantería Industrial", precio: 500, tipo: "Estantería" },
];

function agregarMueble() {
  const nombre = prompt("Introduce el nombre del mueble:");
  const precio = parseFloat(prompt("Introduce el precio del mueble:"));
  const tipo = prompt("Introduce el tipo de mueble (Mesa, Silla, Estantería):");

  const nuevoMueble = { nombre, precio, tipo };
  muebles.push(nuevoMueble);

  mostrarMuebles();
}

function mostrarMuebles() {
  const listaElement = document.getElementById("listaDeMuebles");
  listaElement.innerHTML = "";

  muebles.forEach((mueble, index) => {
    const li = document.createElement("li");
    li.textContent = `${mueble.nombre} - $${mueble.precio} (${mueble.tipo})`;
    listaElement.appendChild(li);
  });
}

mostrarMuebles();
