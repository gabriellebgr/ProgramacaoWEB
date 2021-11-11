
var listaProdutos = [[2, 'Action Figure Itachi Uchiha Akatsuki', 'R$ 399,90', 'figure3.jpg', 'Nº1 do mês de Novembro'], [14, 'Action Figure Venom com luz LED', 'R$ 489,90', 'figure15.jpg', 'Nº2 do mês de Novembro'], [49, 'Action Figure Goku', 'R$ 249,90','figure50.jpg', 'Nº3 do mês de Novembro']];

var carrinho = [];

var listaAvaliacao = [['usuario.png', '@userone','avaliacao.jpeg' ,'02/10/2021', 'Ótimo atendimento, qualidade muito boa do produto. Recomendo!'],['usuario.png', '@usertwo','avaliacao.jpeg' ,'02/10/2021', 'Ótimo atendimento, qualidade muito boa do produto. Recomendo!'],['usuario.png', '@userthree','avaliacao.jpeg' ,'02/10/2021', 'Envio muito rápido, produtos de excelente qualidade!'],['usuario.png', '@userfour','avaliacao.jpeg' ,'02/10/2021', 'Com certeza comprarei mais vezes, amei meus bonequinhos.']];


window.onload = function(){
    montarCardTodosProdutos();
    montarCardAval();
}

function montarCardTodosProdutos(){

    document.getElementById("MaisVendidos").innerHTML = "";

    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card" >';
        conteudo += '<div class="div-img">';
        conteudo += '<img src="img/' + listaProdutos[i][3] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-descricao">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';
        conteudo += '<div class="div-valor">';
        conteudo += listaProdutos[i][2];
        conteudo += '</div>';
        conteudo += '<div class="div-vermais">';
        conteudo += '<button onclick="mudaPaginaVer()">Ver Mais</button>';
        conteudo += '</div>';
        conteudo += '<div class="div-comprar" >'
        conteudo += listaProdutos[i][4];
        conteudo += '</div>';
          


        conteudo += '</div>';
        
        document.getElementById("MaisVendidos").innerHTML += conteudo;
    }
}


function montarCardAval(){

    document.getElementById("divAval").innerHTML = "";

    for(var i = 0; i < listaAvaliacao.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card-aval">';
        conteudo += '<div class="div-usuario">';
        conteudo += '<img src="img/' + listaAvaliacao[i][0] + '" />';
        conteudo += listaAvaliacao[i][1];
        conteudo += '</div>';
        conteudo += '<div class="div-avalia">';
        conteudo += '<img src="img/' + listaAvaliacao[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-data">';
        conteudo += listaAvaliacao[i][3];
        conteudo += '</div>';
        conteudo += '<div class="div-comentario">';
        conteudo += listaAvaliacao[i][4];
        conteudo += '</div>'


        conteudo += '</div>';
        
        document.getElementById("divAval").innerHTML += conteudo;
    }
}

function mudaPaginaIn(){
    window.location.href = "index.html";
}

function mudaPaginaLog(){
    window.location.href = "paginas/login.html";
}

function mudaPaginaCad(){
    window.location.href = "paginas/cadastro.html";
}

function mudaPaginaCar(){
    window.location.href = "paginas/carrinho.html";
}

function mudaPaginaLogando(){
    window.location.href = "paginas/logar.html";
}

function mudaPaginaVer(){
    window.location.href = "paginas/todos.html";
}

function mudaPaginaMenuBHA(){
    window.location.href = "paginas/boku.html";
}

function mudaPaginaMenuDS(){
    window.location.href = "paginas/demon.html";
}

function mudaPaginaMenuDB(){
    window.location.href = "paginas/dragon.html";
}

function mudaPaginaMenuM(){
    window.location.href = "paginas/marvel.html";
}

function mudaPaginaMenuN(){
    window.location.href = "paginas/naruto.html";
}

function mudaPaginaMenuOP(){
    window.location.href = "paginas/one.html";
}

function mudaPaginaMenuP(){
    window.location.href = "paginas/pokemon.html";
}


