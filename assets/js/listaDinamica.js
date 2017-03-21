//alert("Bienvenido a Frutería Master"); --> prueba

// arreglo dinámico global para guardar nuevos items (no lo uso pero creo que debería (>__<) )
var listaFrutas = [];

// función para agregar items a la lista
function listaDinamica(){
    
    // variable donde se guarda el nuevo item
    var frutaNueva = document.getElementById("frutaAgregada").value;
    
    // condición para asegurarme de que se reciba un texto u no un campo vacío
    if(frutaNueva != ""){
        // el item nuevo se envía directamente a la lista ordenada en HTML
        document.getElementById("listaDeFrutas").innerHTML += "<li>" + frutaNueva + "</li>";
        
        // guardo los nuevos items en el arreglo
        listaFrutas.push(frutaNueva);
        
    }
    
}
   
