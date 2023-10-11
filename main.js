function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
    document.querySelectorAll('.tecla');
    
    const listaDeTeclas = document.querySelectorAll('.tecla');
   // Estrutura de repetição - Enquanto
    for (contador = 0;contador < listaDeTeclas.length;++) {
    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList [1];
    const idAudio = `#som_${intrumento}`;
    

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
        
    
    

    

    