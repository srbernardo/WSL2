let pontosJogador = 0;
let pontosComputador = 0;

const jogar = (jogadaJogador) => {
  switch (jogadaJogador) {
    case 1:
      computador = jodagadaComputador();
      selecionar(computador)
      mensagem(ganhador(jogadaJogador,computador));
      break;
    case 2:
      computador = jodagadaComputador();
      mensagem(ganhador(jogadaJogador,computador));
      selecionar(computador)
      break;
    case 3:
      computador = jodagadaComputador();
      mensagem(ganhador(jogadaJogador,computador));
      selecionar(computador)
      break;
    }
  
  setTimeout(() => {
    deselecionar(computador);
    document.getElementById('mensagem').innerHTML = "Jogue novamente";
  }, 1500);
}

const jodagadaComputador = () =>  Math.floor(Math.random() * 3) + 1

const ganhador = (jogador, jodagadaComputador) => {
  if (jogador == 1 && jodagadaComputador == 1) {
    return "Empate";
  }
  else if (jogador == 1 && jodagadaComputador == 2) {
    return "Computador";
  }
  else if (jogador == 1 && jodagadaComputador == 3) {
    return "Jogador";
  }
  else if (jogador == 2 && jodagadaComputador == 1) {
    return "Jogador";
  }
  else if (jogador == 2 && jodagadaComputador == 2) {
    return "Empate";
  }
  else if (jogador == 2 && jodagadaComputador == 3) {
    return "Computador";
  }
  else if (jogador == 3 && jodagadaComputador == 1) {
    return "Computador";
  }
  else if (jogador == 3 && jodagadaComputador == 2) {
    return "Jogador";
  }
  else if (jogador == 3 && jodagadaComputador == 3) {
    return "Empate";
  }
}

const somarPontoComputador = () => {
  pontosComputador++;
  document.getElementById('pontos-cpu').innerHTML = pontosComputador;
}

const somarPontoJogador = () => {
  pontosJogador++;
  document.getElementById('pontos-jogador').innerHTML = pontosJogador;
}

const mensagem = (texto) => {
  if (texto === 'Empate') {
    document.getElementById('mensagem').innerHTML = "Deu " + texto;
  }
  else if (texto === 'Jogador') {
    somarPontoJogador();
    document.getElementById('mensagem').innerHTML =  'O ' + texto + ' venceu, 1 ponto para ele';
  }
  else if (texto === 'Computador') {
    somarPontoComputador();
    document.getElementById('mensagem').innerHTML =  '1 ponto para o ' + texto;
  }
}

const selecionar = (escolha) => document.getElementById('cpu-' + escolha).classList.add('selecionado');

const deselecionar = (escolha) => document.getElementById('cpu-' + escolha).classList.remove('selecionado');

document.getElementById("jogador-1").onclick = function() {jogar(1)}
document.getElementById("jogador-2").onclick = function() {jogar(2)}
document.getElementById("jogador-3").onclick = function() {jogar(3)}
