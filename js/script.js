// Mostrar/Ocultar el Formulario
var button = document.querySelector('.btn.link-success.text-white.btn-lg');
function changeDisplay(id) {
  var button = document.querySelector('.btn.link-success.text-white.btn-lg');
  var d = document.getElementById("extra");
  var e = document.getElementById(id);
  if (e.style.display == 'none' || e.style.display == "") {
    e.style.display = 'block';
    d.innerHTML = '<h5>Ocultar tickets</h5>';
    button.innerText = 'Ocultar tickets';
  } else {
    e.style.display = 'none';
    d.innerHTML = '<h5>Comprar tickets</h5>';
    button.innerText = 'Comprar tickets';
  }
}

// 'Efectos especiales' para las tarjetas
// Selecciona todas las tarjetas
var cards = document.querySelectorAll('.cards-container > .card');

// Función para cambiar el estilo al pasar el cursor sobre la tarjeta
function mouseOver() {
  this.style.transform = 'scale(0.95)';
  var cardBody = this.querySelector('.card-body');
  cardBody.style.color = 'white';

  if (this.classList.contains('border-primary')) {
    cardBody.style.backgroundColor = '#007bff';
  } else if (this.classList.contains('border-success')) {
    cardBody.style.backgroundColor = '#28a745';
  } else if (this.classList.contains('border-warning')) {
    cardBody.style.backgroundColor = '#ffc107';
  }
}

// Función para revertir el estilo al quitar el cursor de la tarjeta
function mouseOut() {
  this.style.transform = '';
  var cardBody = this.querySelector('.card-body');
  cardBody.style.color = '';
  cardBody.style.backgroundColor = '';
}

// Aplica las funciones a cada tarjeta
cards.forEach(function(card) {
  card.addEventListener('mouseover', mouseOver);
  card.addEventListener('mouseout', mouseOut);
});

// Para seleccionar cada categoría directamente desde las cards
// Selecciona el menú desplegable y las tarjetas
var select = document.getElementById('categoria');
var cards = document.querySelectorAll('.cards-container > .card');

// Agrega un controlador de eventos de clic a cada tarjeta
cards.forEach(function(card, index) {
  card.addEventListener('click', function() {
    select.value = index + 1;
  });
});

// Funcionalidad del formulario
// * EVENTO CLICK *
const botonBorrar = document.getElementById("borrar");
botonBorrar.addEventListener("click", borrar);
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
function borrar() {/* "BLANQUEA" TODOS LOS CAMPOS */
  nombre.value = "";
  apellido.value = "";
  correo.value = "";
  cantidadTickets.value = "";
  totalPagar.value = "";
  opcion.value = "Categoria";
}
// * RESUMEN DE LA OPERACIÓN *
const botonResumen = document.getElementById("resumen");
botonResumen.addEventListener("click", resumen);
const cantidadTickets = document.getElementById("cantidadTickets");
const opcion = document.getElementById("categoria");
const totalPagar = document.getElementById("totalPagar");
function resumen() {
  const valor = cantidadTickets.value;
  let opcionCategoria = opcion.value;
  let descuento;

  // Validación de los campos
  if (!nombre.value || !apellido.value || !correo.value || !cantidadTickets.value || cantidadTickets.value <= 0) {
    alert("Por favor, complete todos los campos y asegúrese de que la cantidad sea mayor a 0");
    return;
  }

  // Validación del correo
  var regex = /\S+@\S+\.\S+/;
  if (!regex.test(correo.value)) {
    alert("Por favor, ingrese un correo válido");
    return;
  }

  switch (opcionCategoria) {
    case "1"://"Estudiante"
      descuento = valor * 200 - (valor * 2 * 80);
      totalPagar.value = "El total a pagar es: $" + `${descuento}`;
      break;
    case "2"://"Trainee"
      descuento = valor * 200 - (valor * 2 * 50);
      totalPagar.value = "El total a pagar es: $" + `${descuento}`;
      break;
    case "3"://"Junior"
      descuento = valor * 200 - (valor * 2 * 15);
      totalPagar.value = "El total a pagar es: $" + `${descuento}`;
      break;
    default:
      totalPagar.value = "Debe seleccionar una de las tres categorías";
      break;
  }
}
// FIN del código ;)