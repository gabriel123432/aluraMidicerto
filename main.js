function tocaSom(idElementoAudio){
   const elemento = document.querySelector(idElementoAudio).play();
}
if (elemento === null) {
    alert('Elemento não encontrado');
}
if (elemento != null) {
    if (elemento && elemento.localName === 'audio') {
    elemento.play();
} else {
    alert('Elemento não encontrado')
}
}
    document.querySelectorAll('.tecla');
    
    const listaDeTeclas = document.querySelectorAll('.tecla');
   // Estrutura de repetição - Enquanto
    for (contador = 0;contador < listaDeTeclas.length;++) {
    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList [1];
    const idAudio = `#som_${intrumento}`;
    }

    tecla.onclick = function () {
    tocaSom(idAudio);
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    tecla.onkeydown = function (evento)  
        console.log (evento.code === 'Enter');
        if (evento.code === 'Enter' || evento.code === Space ) {
            tecla.classList.add('ativa');}
        
    
    

    

    