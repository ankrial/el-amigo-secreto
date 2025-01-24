// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCampo() {
    document.querySelector('#amigo').value="";
}


function agregarAmigo() {
    let ingresarListaAmigo = document.querySelector('#amigo').value;
    // Evaluamos si el mensaje es vacío
    if(ingresarListaAmigo===""){
        alert("Por favor, inserte un nombre.");        
    } else {
        amigos.push(ingresarListaAmigo);
                       
        // Agregamos la lista de Abajo
        let listaDeAmigos = document.getElementById('listaAmigos');
        listaDeAmigos.innerHTML = "";
        
        // Agregamos los nombres de la lista de Nombres
        for (var i = 0; i < amigos.length; i++) {
           let li = document.createElement('li');
            li.textContent=amigos[i]; 
            listaDeAmigos.appendChild(li);
        }

        // Limpiamos el espacio para ingresar nombres
        limpiarCampo();
        console.log(amigos);
    }       
    return;
}


function sortearAmigo() {
    let NombreAmigos =  Math.floor(Math.random()*amigos.length);
    console.log(amigos[NombreAmigos]);

     // Agregamos la lista de Abajo
     let listaDeAmigos = document.getElementById('listaAmigos');
     listaDeAmigos.innerHTML = "";

     let ResultadoDeAmigo = document.getElementById('resultado');
     ResultadoDeAmigo.innerHTML = amigos[NombreAmigos];
}


