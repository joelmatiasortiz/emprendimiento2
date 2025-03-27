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
