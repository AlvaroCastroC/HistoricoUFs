const express = require('express');
const app = express();

////////////////
// O cors é essencial para que a api esteja com acesso liberado para qualquer site que queira ////consumir essa api

const cors = require('cors');

///////////////

//Configurando o cors para que se torne acessivel
//Sem ele não será possivel conectar

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    app.use(cors());
    next();
    
});

///////////////

//Chamando o arquivo que contem as funções
const servico = require('./servico/servico');

///////////////

app.get('/ufs', (req, res) => {

// Buscar apartir do nome do estado

// Com essa função sera possivel chamar os estados pelo nome completo e também parcialmente

    const nomeUf = req.query.busca;
    const resultado = nomeUf ? servico.buscarUFsPorNome(nomeUf) : servico.buscarUfs();
    if(resultado.length > 0) {
        res.json(resultado);
    } else {
// Mensagem de error caso o usuario solicitar uma buscar que n contenha o nome do estado

        res.status(404).send({"erro":" Nenhuma UF encontrada"});
    }

});



app.get('/ufs/:iduf', (req, res) => {
// Busca apartir do id que o usuario solicitar

    const uf = servico.buscarUfPorId(req.params.iduf);

    if(uf) {
      res.json(uf);
    }else if (isNaN(parseInt(req.params.iduf))){
        
// Essa condição irá ser chamada caso o id não exista ou id não for um numero

        res.status(400).send({"erro": "Requisição inválida"});
    }else {
        res.status(404).send({"erro": "UF não encontrada"});
    }

   
 }
);




app.listen(8080, () => {
    console.log("servidor conectado na porta 8080");
});