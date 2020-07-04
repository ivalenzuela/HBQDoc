




$(function() {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
});

function home(){
  document.getElementById("home").style.display = "block"; 
  document.getElementById("ventana1").style.display = "none";
  document.getElementById("ventana2").style.display = "none"; 
  document.getElementById("ventana3").style.display = "none";
  document.getElementById("ventana4").style.display = "none";  
  document.getElementById("ventana5").style.display = "none";  
  document.getElementById("ventana6").style.display = "none";    
}

function ventana1(){
  document.getElementById("home").style.display = "none"; 
  document.getElementById("ventana1").style.display = "block"; 
  document.getElementById("ventana2").style.display = "none"; 
  document.getElementById("ventana3").style.display = "none";
  document.getElementById("ventana4").style.display = "none";  
  document.getElementById("ventana5").style.display = "none";  
  document.getElementById("ventana6").style.display = "none";  
}

function ventana2(){
  document.getElementById("home").style.display = "none"; 
  document.getElementById("ventana1").style.display = "none";
  document.getElementById("ventana2").style.display = "block"; 
  document.getElementById("ventana3").style.display = "none";
  document.getElementById("ventana4").style.display = "none";  
  document.getElementById("ventana5").style.display = "none";  
  document.getElementById("ventana6").style.display = "none";  
}

function ventana3(){
  document.getElementById("home").style.display = "none"; 
  document.getElementById("ventana1").style.display = "none";
  document.getElementById("ventana2").style.display = "none"; 
  document.getElementById("ventana3").style.display = "block";
  document.getElementById("ventana4").style.display = "none";  
  document.getElementById("ventana5").style.display = "none";  
  document.getElementById("ventana6").style.display = "none";  
}

function ventana4(){
  document.getElementById("home").style.display = "none"; 
  document.getElementById("ventana1").style.display = "none";
  document.getElementById("ventana2").style.display = "none"; 
  document.getElementById("ventana3").style.display = "none";
  document.getElementById("ventana4").style.display = "block";  
  document.getElementById("ventana5").style.display = "none";  
  document.getElementById("ventana6").style.display = "none";  
}

function ventana5(){
  document.getElementById("home").style.display = "none"; 
  document.getElementById("ventana1").style.display = "none";
  document.getElementById("ventana2").style.display = "none"; 
  document.getElementById("ventana3").style.display = "none";
  document.getElementById("ventana4").style.display = "none";  
  document.getElementById("ventana5").style.display = "block";  
  document.getElementById("ventana6").style.display = "none";  
}

function ventana6(){
  document.getElementById("home").style.display = "none"; 
  document.getElementById("ventana1").style.display = "none";
  document.getElementById("ventana2").style.display = "none"; 
  document.getElementById("ventana3").style.display = "none";
  document.getElementById("ventana4").style.display = "none";  
  document.getElementById("ventana5").style.display = "none";  
  document.getElementById("ventana6").style.display = "block";  
}

var clic = 1;
function ocultarMenu(){ 
   if(clic==1){
   document.getElementById("nav-side-menu").style.width = "4em";
   document.getElementById("contenido").style.marginLeft = "3em";
   $('.collapse').collapse('hide')
   clic = clic + 1;
   } else{
       document.getElementById("nav-side-menu").style.width = "19em"; 
       document.getElementById("contenido").style.marginLeft = "14.2em";     
    clic = 1;
   }   
}

function iconoMenu(){ 
    document.getElementById("nav-side-menu").style.width = "19em"; 
    document.getElementById("contenido").style.marginLeft = "14.2em";    
}

