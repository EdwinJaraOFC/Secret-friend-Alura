// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo () {
    let amigoIngresado = document.getElementById('amigo').value.trim();
    
    // Validación: Campo Vacío
    if (amigoIngresado === '') {
        alert('⚠️ Ingresa un nombre válido.');
        document.getElementById('amigo').value = '';
        return;
    }

    // Validación: Límite de caracteres 30)
    if (amigoIngresado.length > 30) {
        alert('⚠️ El nombre no puede tener más de 30 caracteres.');
        return;
    }

    // Validación: Nombre Duplicado
    if (amigos.includes(amigoIngresado)) {
        alert('⚠️ Este nombre ya está en la lista.');
        return;
    }

    // Agregar amigo a la lista
    amigos.push(amigoIngresado);
    console.log(amigoIngresado);

    // Actualizar la lista en la página
    actualizarListaAmigos();

    // Limpiar el input
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    let index = 1; // 🔹 Inicializamos el contador en 1
    for (let amigo of amigos) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.innerHTML = `<strong>Amigo ${index}:</strong> ${amigo}`; // 🔹 Agregamos la numeración
        listaAmigos.appendChild(nuevoElemento);
        index++; // 🔹 Aumentamos el contador en cada iteración
    }
}

function celebrarGanador() {
    confetti({
        spread: 360,
        ticks: 100, /* Duración */
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 400,
        scalar: 3,
        shapes: ["image"],
        shapeOptions: {
          image: [{
              src: "https://particles.js.org/images/fruits/apple.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/avocado.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/banana.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/berries.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/cherry.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/grapes.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/lemon.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/orange.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/peach.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/pear.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/pepper.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/plum.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/star.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/strawberry.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/watermelon.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/watermelon_slice.png",
              width: 32,
              height: 32,
            },
          ],
        },
      });
}

function sortearAmigo () {
    if (amigos.length === 0) {
        alert('⚠️ La lista de amigos está vacía.');
        return;
    }

    let cantidadAmigos = amigos.length;
    let indiceRandom = Math.floor(Math.random()*cantidadAmigos);

    let amigoSorteado = amigos[indiceRandom];

    document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    celebrarGanador();
    return;
}