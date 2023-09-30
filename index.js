const express = require('express');
const app = express();

const servico = require('./servico/servico');

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? servico.buscarUFsPorNome(nomeUf) : servico.buscarUfs();
    if(resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({"erro":" Nenhuma UF encontrada"});
    }

});



app.get('/ufs/:iduf', (req, res) => {
    
    const uf = servico.buscarUfPorId(req.params.iduf);

    if(uf) {
      res.json(uf);
    }else if (isNaN(parseInt(req.params.iduf))){
        res.status(400).send({"erro": "Requisição inválida"});
    }else {
        res.status(404).send({"erro": "UF não encontrada"});
    }

   
 }
);




app.listen(8080, () => {
    console.log("servidor conectado na porta 8080");
});