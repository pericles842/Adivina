var clic = 1;
var clic_two = 1;
function divAuto(){ 
   if(clic==1){
   document.getElementById("div_mostrar").style.height = "70px";
   document.getElementById("div_mostrar").style.display="block";
   clic = clic + 1;
   } else{
    document.getElementById("div_mostrar").style.height = "0px";
    document.getElementById("div_mostrar").style.display="none";
    clic = 1;
   }   
}
function divAuto_two(){ 
    if(clic_two==1){
    document.getElementById("div_mostrar_two").style.height = "200px";
    document.getElementById("div_mostrar_two").style.display="block";
    clic_two = clic_two + 1;
    } else{
     document.getElementById("div_mostrar_two").style.height = "0px";
     document.getElementById("div_mostrar_two").style.display="none";
     clic_two = 1;
    }   
 }
  let boton_input_two = document.getElementById('boton_input_two')
  boton_input_two.addEventListener('click',record)
  const words = [];
  const pasward = document.getElementById('pasward_input').value

 function record() {
   let pasward = document.getElementById('pasward_input').value
   let tex = document.getElementById('tex_input').value
   let help = document.getElementById('help_input').value
   let word = document.getElementById('word')
   let word_two = document.getElementById('word_two')
   if (tex.length == 0) {
      swal({
         title: "!Campo vacio¡",
         text: "El perteneciente esta vacio, llenar",
         icon: "warning",
       });
   }else if(pasward.length == 0){
      swal({
         title: "!Campo vacio¡",
         text: "Palabra secreta esta vacia, llenar",
         icon: "warning",
       });
   }else if(help.length==0){
      swal({
         title: "!Campo vacio¡",
         text: "Texto de ayuda esta vacio,llenar",
         icon: "warning",
       });
   }else{
      word.innerHTML = help
      word_two.innerHTML = tex
      words.push(pasward)
      document.getElementById("div_mostrar_two").style.height = "0px";
      document.getElementById("div_mostrar_two").style.display="none";
      document.getElementById("div_mostrar").style.height = "70px";
      document.getElementById("div_mostrar").style.display="block";
      return pasward
   }
} 
let boton_input = document.getElementById('boton_input')
boton_input.addEventListener('click',result)

function result() {
   let input_one = document.getElementById('input_one').value 
   let pasward = document.getElementById('pasward_input').value
   if (input_one.length == "" && pasward.length == "") {
      swal({
         title: "!Campo vacio¡",
         text: "Llene los campos inferiores",
         icon: "warning",
       });
   }else if(input_one.length > 1 && pasward.length == "") {
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
            title:  input_one + "!No es la palabra¡",
            text: "Intentalo otra vez",
            icon: "error",
          });
      }
   }
}

function info(){
   swal({
      title: "!Como jugar¡",
      text: "Este juego es de 2 jugadores . Comienza el jugador 2 bajando el panel y llenado los datos de la adivinanza , texto de ayuda , perteneciente y palabra clave para luego el jugador uno adivinarla",
      icon: "info",
    });
}