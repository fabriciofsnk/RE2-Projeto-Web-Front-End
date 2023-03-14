// 1° Passo - Dar um jeito de pegar o elemento html do botao;  
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const paragrafos = document.querySelectorAll('.sinopse');

// 2° Passo - Dar um jeito de identificar o clique do usuario no batão;
botoesCarrossel.forEach((botao, indice) => {   // forEach cria um laço 
    botao.addEventListener('click', () => {   // Verifica se ha um click em alguns dos botoes
        
        desativarBotaoSelecionado();   
       
        marcarBotaoSelecionado(botao);       
        
        esconderImagemAtiva();

        esconderSinopse();

        mostraImagemClicada(indice);

        mostrarParagrafo(indice);
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado'); //Verifica qual botao esta selecionado   
    botaoSelecionado.classList.remove('selecionado'); //Remove a class selecionado do Batao
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');// adiciona a class selecionado no batoa

}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');

}

function mostraImagemClicada(indice) {
    imagens[indice].classList.add('ativa');
}

function mostrarParagrafo(indice) {
    paragrafos[indice].classList.add('sinopseativa');
  }

  function esconderSinopse() {
    const sinopseAtiva = document.querySelector('.sinopseativa');
    sinopseAtiva.classList.remove('sinopseativa');
  }