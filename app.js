function sortear(){
    function pegaValor(idElemento){
        return parseInt(document.getElementById(idElemento).value);
    }

    let quantidade = pegaValor("quantidade");
    let min = pegaValor("de");
    let max = pegaValor("ate");

    let listaNumeroSecreto = [];
    let numero;
    while(listaNumeroSecreto.length < quantidade){
        numero = gerarNumeroAleatorio(min, max);
        listaNumeroSecreto.push(numero);
    }

    let respostaUsuario = document.getElementById("mensagem_usuario");
    respostaUsuario.textContent = `${listaNumeroSecreto}`;

    function limpaCampo(idElemento){
        let conteudoElemento = document.getElementById(idElemento);
        conteudoElemento.value = "";
    }
    limpaCampo("quantidade");
    limpaCampo("de");
    limpaCampo("ate");
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}