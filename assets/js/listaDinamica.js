//alert("Bienvenido a Frutería Master");
var listaFrutas = [];
function listaDinamica(){
    var frutaNueva = document.getElementById("frutaAgregada").value;
    if(frutaNueva != ""){
        document.getElementById("listaDeFrutas").innerHTML += "<li>" + frutaNueva + "</li>";
        listaFrutas.push(frutaNueva);
        
    }
    
}
   
