// Se llaman todos los inputs obteniendolos por su Id.
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

// Tambien se llaman los elementos "p".
const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Se le asigna a 3 variables el valor obtenido de los inputs.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;
/* 
    Y luego se le asigna a los elementos tipo "p" el valor de
    estos mismos inputs.
*/
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

/* 
    Se crea una funcion para actualizar el color de fondo.
    Se piden 3 variables los cuales representan un porcentaje
    del color.
*/
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

/* 
    Aquí se crean los eventos para los inputs, en este caso
    el evento es "change", que se ejecutara cuando el elemento
    presente algun cambio.
    Se captura su valor, se le asigna al elemento "p", y despues
    se llama a la funcion creada arriba para actualizar el color
    del fondo.
*/
// Para actualizar Red (Rojo).
inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});