// JavaScript Document function contacto() {
 

function contacto(){ 
 var name = document.getElementById("nombre").value;
 var respuesta = confirm("Estas seguro de que quieres enviar este mensaje?");       
 if(respuesta)
 alert("Gracias por tu mensaje " + name );
 else
  window.location= "contacto.html";
}

function myalert() {
 alert("Esta función se habilitara muy pronto");
 var respuesta = confirm("Desea dejar una consulta online?");        
 if(respuesta)
 window.location= "contacto.html";
 else
  window.location= "contacto.html";
}

function switchSheet() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "style/style.css") {
    theme.href = "style/modonoche.css";
  } else {
    theme.href = "style/style.css";
  }
}