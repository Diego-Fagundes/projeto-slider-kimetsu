const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

btnAvancar.addEventListener('click', function () {

    if(cartaoAtual === cartoes.length -1) return;
    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');
    const ctselecionado = document.querySelector('.selecionado');
    console.log(ctselecionado);
    ctselecionado.classList.remove('selecionado');
});

// parte 2

btnVoltar.addEventListener('click', function () {
    
    if(cartaoAtual === 0) return

    const ctselecionado = document.querySelector('.selecionado');
    ctselecionado.classList.remove('selecionado');
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');
    console.log(ctselecionado);
    
});