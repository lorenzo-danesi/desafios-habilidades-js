// TODO: Implemente um dicionário de feitiços pré-definido, simule um JSON:
const feiticos = {
  "Lumus": "Cria uma luz na ponta da varinha",
  "Expelliarmus": "Desarma o oponente, fazendo com que ele solte o que estiver segurando",
  "Expecto Patronum": "Invoca um Patrono, uma manifestacao magica que afasta Dementadores",
  "Wingardium Leviosa": "Faz objetos levitarem",
  "Alohomora": "Destranca portas e objetos trancados",
}

// TODO: Adicione uma função buscarFeitico, para buscar a descrição de um feitiço e retornar caso não seja encontado:
function buscarFeitico(feitico) {
  if(feitico in feiticos) {
    return feiticos[feitico];
  } else {
    return "Feitico nao encontrado";
  }
}


const feitico = gets().trim(); // Removendo espaços extras

print(buscarFeitico(feitico));