// TODO: Implemente aqui uma função verificarEstoque() que recebe três parâmetros {
  function verificarEstoque(nomeItem, quantidadeDisponivel, quantidadeSolicitada) {
    if (isNaN(quantidadeDisponivel) || isNaN(quantidadeSolicitada)) {
        return "Erro: Quantidades devem ser numeros inteiros";
        
    }  

// TODO: Crie uma condição if/else para verificar a quantidadeSolicitada e a quantidadeDisponivel:
// TODO: Retorne conforme a descrição.
    if (quantidadeSolicitada <= quantidadeDisponivel) {
      return "Pedido realizado";
    } else {
      return "Estoque insuficiente";
    }
  }
    
// Lendo as entradas do usuário
let nomeItem = gets();
let quantidadeDisponivel = parseInt(gets());
let quantidadeSolicitada = parseInt(gets());

// TODO: Chame a função e imprima o resultado:
console.log(verificarEstoque(nomeItem, quantidadeDisponivel, quantidadeSolicitada));