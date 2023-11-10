let dados = require('../dados/dados');
let colecaoUf = dados.colecaoUf;

// Função que retornará os dados 

function buscarUfs(){
    return colecaoUf;
}

///////////////

// Função que irá buscar o objeto que contenha o nome, ou pela sigla, do estado digitado

function buscarUFsPorNome(nomeUf) {
    return colecaoUf.filter(uf => 

    // Função que converte o valor informado em minusculo e compara a o valor do objeto também em minusculo

    (uf.uf.toLowerCase().includes(nomeUf.toLowerCase())) ||
    (uf.nome.toLowerCase().includes(nomeUf.toLowerCase())));
};

///////////////

// Função que irá buscar o objeto pelo id informado

function buscarUfPorId(id) {
    const idUf = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUf);
}

///////////////

exports.buscarUfs = buscarUfs;
exports.buscarUFsPorNome = buscarUFsPorNome;
exports.buscarUfPorId = buscarUfPorId;