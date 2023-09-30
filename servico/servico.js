let dados = require('../dados/dados');
let colecaoUf = dados.colecaoUf;

function buscarUfs(){
    return colecaoUf;
}

function buscarUFsPorNome(nomeUf) {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

function buscarUfPorId(id) {
    const idUf = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUf);
}

exports.buscarUfs = buscarUfs;
exports.buscarUFsPorNome = buscarUFsPorNome;
exports.buscarUfPorId = buscarUfPorId;