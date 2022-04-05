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

 function record() {
   let pasward = document.getElementById('pasward_input').value
   let tex = document.getElementById('tex_input').value
   let help = document.getElementById('help_input').value
   let word_two = document.getElementById('word_two')
    
   word.innerHTML = help
   word_two.innerHTML = tex
 }