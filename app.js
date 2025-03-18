// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// array para almacenar los nombres
let friends = []


// función para actualizar la lista de amigos
function updateFriends() {
    // espacio donde estara la lista de amigos
    let space = document.getElementById("listaAmigos")
    document.getElementById("listaAmigos").innerHTML = "" 

    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        li.textContent = friends[i];
        space.appendChild(li)
    }
}

// función para agregar amigos al array
function agregarAmigo() {
    // trayendo nombre del amigo
    let input = document.getElementById("amigo").value  

    if( input == "" ) {
        alert("Por favor, inserte un nombre.")
    } else {
        friends.push(input)
        document.getElementById("amigo").value = " "
        updateFriends()
    }
}

// función para sortear los amigos
let ganador = document.getElementById("resultado")

function sortearAmigo() {
    if (friends.length != 0) {
        let indice = Math.floor(Math.random()*friends.length)
        let campeon = friends[indice]

        ganador.innerHTML = campeon
    } else {
        alert("La lista de amigos esta vacia")
    }
}
