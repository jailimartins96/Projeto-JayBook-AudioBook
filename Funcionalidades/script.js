const botaoPlayPause = document.getElementById('play-pause');
const botaoAvacar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');


const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual= 1;


function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle');

}

function pausarFaixa(){
    audioCapitulo.pause()
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle');

}


function tocarOuPausar(){
    if(taTocando=== false){
        tocarFaixa();
        taTocando = true;
    }else {
        pausarFaixa();
        taTocando = false;
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = ' Capitulo ' + capituloAtual;
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
       capituloAtual = 1;

    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
    
}


function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;

    }else {
        capituloAtual = capituloAtual - 1
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvacar.addEventListener('click' , proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);

