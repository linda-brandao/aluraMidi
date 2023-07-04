function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou seletor inválido")
    }
}

// lista de elementos que tem a class como tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1]; //classList acessa o nome das classes que tem naquela tag
    const idAudio = `#som_${instrumento}`;

    // quando clicar na minha tecla
    tecla.onclick = () => tocaSom(idAudio);

    // quando a minha tecla estiver para baixo (pressionada) adicione a class ativa
     tecla.onkeydown = (evento) => {
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add('ativa');
        }
     }

     // quando a minha tecla estiver para cima (não pressionada) remove a class ativa
     tecla.onkeyup = () => tecla.classList.remove('ativa');
}
