//GRAVANDO ARQUIVO

const fs = require('fs');
const ARQUIVO_BD = 'dados_produtos.json';
let produtos = [
    {nome: 'Coxinha', valor: 4.0},
    {nome: 'Pastel', valor: 3.5},
    {nome: 'Suco', valor: 2.0}
]
fs.writeFile(ARQUIVO_BD, JSON.stringify(produtos), (err,data) => {
    if (err) console.log(err);
    console.log("Dados gravados com sucesso.")
}) 