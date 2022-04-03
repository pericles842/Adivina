var clic = 1;
function divAuto(){ 
   if(clic==1){
   document.getElementById("div_mostrar").style.height = "100px";
   document.getElementById("div_mostrar").style.display="block";
   clic = clic + 1;
   } else{
    document.getElementById("div_mostrar").style.height = "0px";
    document.getElementById("div_mostrar").style.display="none";
    clic = 1;
   }   
}