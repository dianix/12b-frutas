//alert("Bienvenido a Frutería Master"); --> prueba

// arreglo dinámico global para guardar nuevos items (no lo uso pero creo que debería (>__<) )
//var listaFrutas = [];

// función para agregar items a la lista
function listaDinamica(){
    
    // variable donde se guarda el nuevo item
    var frutaNueva = document.getElementById("frutaAgregada").value;
    
    // condición para asegurarme de que se reciba un texto y no un campo vacío
    if(frutaNueva != ""){
        
        // el item nuevo se envía directamente a la lista ordenada en HTML
        
        // nueva forma aprendida más bonita =)
        var nuevoElementoLista = document.createElement("li");
        nuevoElementoLista.innerHTML = frutaNueva;
        document.getElementById("listaDeFrutas").appendChild(nuevoElementoLista);
        document.getElementById("frutaAgregada").value = "";
        
        // guardo los nuevos items en el arreglo
        //listaFrutas.push(frutaNueva);
    }
}

function eliminarElemento() {
    var elementos = document.getElementById("listaDeFrutas");
    //console.log(elementos);
    elementos.removeChild(elementos.lastElementChild);
}
   

        //document.getElementById("listaDeFrutas").innerHTML += "<li>" + frutaNueva + "</li>";