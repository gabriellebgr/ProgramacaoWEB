var listaLogin = [['icone.png', 'JÁ TENHO CADASTRO', 'mudaPaginaLogando()','LOGIN'], ['icone.png', 'SOU CLIENTE NOVO','mudaPaginaCad()', 'CADASTRAR-SE']];

window.onload = function(){
    montarPaginaLogin();
}

function montarPaginaLogin(){

    document.getElementById("div-login").innerHTML = "";

    for(var i = 0; i < listaLogin.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card-login">'
        conteudo += '<div class="div-arruma">';
        conteudo += '<div class="div-img-login">';
        conteudo += '<img src="../img/' + listaLogin[i][0] + '" />';
        conteudo += '</div>';
        conteudo += '</div>';
        conteudo += '<div class="div-escrita">';
        conteudo += listaLogin[i][1];
        conteudo += '</div>';
        conteudo += '<div class="div-botaologin">';
        conteudo += '<button class="div-fazerlogin" onclick="' + listaLogin[i][2] +'">' + listaLogin[i][3] + '</button>';
        conteudo += '</div>';
        conteudo += '</div>';


        conteudo += '</div>';
        
        document.getElementById("div-login").innerHTML += conteudo;
    }
}

function mudaPaginaIn(){
    window.location.href = "../index.html";
}

function mudaPaginaLog(){
    window.location.href = "../paginas/login.html";
}

function mudaPaginaCad(){
    window.location.href = "../paginas/cadastro.html";
}


function mudaPaginaCar(){
    window.location.href = "../paginas/carrinho.html";
}

function mudaPaginaLogando(){
    window.location.href = "../paginas/logar.html";
}

function mudaPaginaVer(){
    window.location.href = "../paginas/todos.html";
}

function mudaPaginaMenuBHA(){
    window.location.href = "../paginas/boku.html";
}

function mudaPaginaMenuDS(){
    window.location.href = "../paginas/demon.html";
}

function mudaPaginaMenuDB(){
    window.location.href = "../paginas/dragon.html";
}

function mudaPaginaMenuM(){
    window.location.href = "../paginas/marvel.html";
}

function mudaPaginaMenuN(){
    window.location.href = "../paginas/naruto.html";
}

function mudaPaginaMenuOP(){
    window.location.href = "../paginas/one.html";
}

function mudaPaginaMenuP(){
    window.location.href = "../paginas/pokemon.html";
}