function info() {
   swal({
      title: "!Como jugar¡",
      text: "Este juego es de 2 jugadores . Comienza el jugador 2 bajando el panel y llenado los datos de la adivinanza , texto de ayuda , perteneciente y palabra clave para luego el jugador uno adivinarla",
      icon: "info",
   });
}
var clic = 1;
var clic_two = 1
function divAuto() {
   let height = 0;
   let display = 'none';

   if (clic == 1) {
      height = 70
      display = "block";
      clic++
   } else clic = 1;

   let banner = document.getElementById("div_mostrar");
   banner.style.height = `${height}px`;
   banner.style.display = display;
}

function divAuto_two() {
   let height = 0;
   let display = 'none';

   if (clic_two == 1) {
      height = 200
      display = "block";
      clic_two++
   } else clic_two = 1;

   let banner = document.getElementById("div_mostrar_two");
   banner.style.height = `${height}px`;
   banner.style.display = display;
}
function getElement(id) {
   return document.getElementById(id).value
}
let boton_input_two = document.getElementById('boton_input_two')
boton_input_two.addEventListener('click', record)

const words = [];
const pasward = getElement('pasward_input')

function record() {
   let pasward = getElement('pasward_input')
   let tex = getElement('tex_input')
   let help = getElement('help_input')
   let word = document.getElementById('word')
   let word_two = document.getElementById('word_two')
   if (tex.length == 0) {
      swal({
         title: "!Campo vacio¡",
         text: "El perteneciente esta vacio, llenar",
         icon: "warning",
      });
   } else if (pasward.length == 0) {
      swal({
         title: "!Campo vacio¡",
         text: "Palabra secreta esta vacia, llenar",
         icon: "warning",
      });
   } else if (help.length == 0) {
      swal({
         title: "!Campo vacio¡",
         text: "Texto de ayuda esta vacio,llenar",
         icon: "warning",
      });
   } else {
      word.innerHTML = help
      word_two.innerHTML = tex
      words.push(pasward)
      document.getElementById("div_mostrar_two").style.height = "0px";
      document.getElementById("div_mostrar_two").style.display = "none";
      document.getElementById("div_mostrar").style.height = "70px";
      document.getElementById("div_mostrar").style.display = "block";
      return pasward
   }
}
let boton_input = document.getElementById('boton_input')
boton_input.addEventListener('click', result)

function result() {
   let input_one = document.getElementById('input_one').value
   let pasward = document.getElementById('pasward_input').value
   if (input_one.length == "" && pasward.length == "") {
      swal({
         title: "!Campo vacio¡",
         text: "Llene los campos inferiores",
         icon: "warning",
      });
   } else if (input_one.length > 1 && pasward.length == "") {
      swal({
         title: "!Campo vacio¡",
         text: "Llene los campos inferiores",
         icon: "warning",
      });
   } else if (input_one.length > 1 && pasward.length > 1) {
      if (input_one == pasward) {
         swal({
            title: "!Haz ganado¡",
            text: "Gracias por jugar",
            icon: "success",
         });
      } else {
         swal({
            title: input_one + "!No es la palabra¡",
            text: "Intentalo otra vez",
            icon: "error",
         });
      }
   }
}
