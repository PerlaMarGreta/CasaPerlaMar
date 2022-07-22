 function myalert() {
 alert("Esta función se habilitara muy pronto");
 var respuesta = confirm("Desea dejar una consulta online?");        
 if(respuesta)
 window.location= "contacto.html";
 else
  window.location= "index.html";
}
function switchSheet() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "style/style.css") {
    theme.href = "style/modonoche.css";
  } else {
    theme.href = "style/style.css";
  }
}