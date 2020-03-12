//LENDO OBJETO
fs.readFile(ARQUIVO_BD, (err,buf) => {
    if (err) {
        console.log("Não foi possível ler os dados", err);
    } else {
        let produtos = JSON.parse(buf.toString());
        produtos.forEach((p, i) => {
            console.log(i + ' - ' + p.nome + ' - R$ ' + p.valor.toFixed(2));
        })
    }
})