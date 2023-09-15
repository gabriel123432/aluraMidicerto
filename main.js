function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
    document.querySelectorAll('.tecla');
    
    const listaDeTeclas = document.querySelectorAll('.tecla');
    listaDeTeclas[contador].onclick = tocaSom;
    let contador = 0;
   // Estrutura de repetição - Ennquanto
    while (contador < listaDeTeclas.length) {
        listaDeTeclas[contador]. onclick = tocaSomPom;
        contador = contador + 1;

        console.log(contador);
    }

    