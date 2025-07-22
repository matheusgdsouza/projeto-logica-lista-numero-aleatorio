/*
function sortear(){
    function pegaConteudo(idElemento){
        return parseInt(document.getElementById(idElemento).value);
    }

    let quantidade = pegaConteudo("quantidade");
    let min = pegaConteudo("de");
    let max = pegaConteudo("ate");

    let listaNumeroAleatorio = [];
    let numero;

    if(quantidade > max - min + 1){
        alert("A quantidade de números solicitada excede a faixa possível. Por favor, ajuste os valores ou a quantiade.")
        limpaCampo("quantidade");
        limpaCampo("de");
        limpaCampo("ate");
        return;
    }

    while(listaNumeroAleatorio.length < quantidade){
        numero = geraNumeroAleatorio(min, max);
        
        while(listaNumeroAleatorio.includes(numero)){
            numero = geraNumeroAleatorio(min,max);
        }
        
        listaNumeroAleatorio.push(numero);
    }

    let respostaUsuario = document.getElementById("mensagem_usuario");
    respostaUsuario.textContent = `A lista dos números sorteados é: ${listaNumeroAleatorio}`;

    habilitaBotao();            
}

reiniciar();

function geraNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function habilitaBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    
    botaoReiniciar.classList.remove("container__botao-desabilitado");
    botaoReiniciar.classList.add("container__botao");             
}

function desabilitaBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");

    botaoReiniciar.classList.remove("container__botao");
    botaoReiniciar.classList.add("container__botao-desabilitado");
}


function reiniciar(){
    function limpaCampo(id){
        return document.getElementById(id).value = "";
    }
    limpaCampo("quantidade");
    limpaCampo("de");
    limpaCampo("ate");

    document.getElementById("mensagem_usuario").textContent = "Nenhum número sorteado até agora.";

    desabilitaBotao();
}

****************************************************************************************************************
****************************************************************************************************************

function sortear(){

    function pegaValor(idElemento){
        return parseInt(document.getElementById(idElemento).value);
    }

    let quantidade = pegaValor("quantidade");
    let min = pegaValor("de");
    let max = pegaValor("ate");

    let listaNumeroAleatorio = [];
    let numero;

    while(listaNumeroAleatorio.length < quantidade){
        numero = geraNumeroAleatorio(min, max);
        while (listaNumeroAleatorio.includes(numero)){
            numero = geraNumeroAleatorio(min,max);
        }
        listaNumeroAleatorio.push(numero);
    }
    
    let respostaSorteio = document.getElementById("mensagem_usuario").textContent = `Os sumeros sorteados são: ${listaNumeroAleatorio.sort()}`;
    ativaBotao();
}

reiniciar();

function geraNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ativaBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.classList.remove("container__botao-desabilitado");
    botaoReiniciar.classList.add("container__botao");
}

function desativaBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.classList.remove("container__botao");
    botaoReiniciar.classList.add("container__botao-desabilitado");
}

function reiniciar(){
    function limpaCampo(id){
        return document.getElementById(id).value = "";
    }
    limpaCampo("quantidade");
    limpaCampo("de");
    limpaCampo("ate");
    desativaBotao();
    let respostaSorteio = document.getElementById("mensagem_usuario").textContent = "Números sorteados: Nehum até o momento."
}
*/

function sortear(){
    function pegaConteudo(idElemento){
        return parseInt(document.getElementById(idElemento).value);
    }

    let quantidade = pegaConteudo("quantidade");
    let min = pegaConteudo("de");
    let max = pegaConteudo("ate");

    if(quantidade > max - min + 1){
        alert("A quantidade de números solicitada excede a faixa possível. Por favor, ajuste os valores ou a quantiade.")
        limpaCampo("quantidade");
        limpaCampo("de");
        limpaCampo("ate");
        return;
    }

    let listaNumeroAleatorio = [];
    let numero;

    while(listaNumeroAleatorio.length < quantidade){
        numero = geraNumeroAleatorio(min, max);
        while(listaNumeroAleatorio.includes(numero)){
            numero = geraNumeroAleatorio(min, max);
        }
        listaNumeroAleatorio.push(numero);
    }
    let resultadoSorteio = document.getElementById("mensagem_usuario").textContent = `O resultado do sorteio é: ${listaNumeroAleatorio.sort()}`;
    ativaBotao();
}
reiniciar();

function geraNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ativaBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.classList.remove("container__botao-desabilitado");
    botaoReiniciar.classList.add("container__botao");
}

function desativaBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.classList.remove("container__botao");
    botaoReiniciar.classList.add("container__botao-desabilitado");
}

function limpaCampo(id){
    return document.getElementById(id).value = "";
}    

function reiniciar(){
    limpaCampo("quantidade");
    limpaCampo("de");
    limpaCampo("ate");

    desativaBotao();

    let resultadoSorteio = document.getElementById("mensagem_usuario").textContent = "Números sorteados:  nenhum até agora";
}