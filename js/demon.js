var listaProdutos = [ [0, 'Action Figure Nezukko Kamado - Demon Slayer', 'R$ 249,90','figure9.jpg', false], [1, 'Action Figure Zenitsu Agatsuma - Kimetsu No Yaiba', 'R$ 129,90','figure12.jpg', false], [2, 'Action Figure Zenitsu Choque Trovão - Demon Slayer', 'R$ 224,90', 'figure23.jpg', false], [3, 'Action Figure Inosuke Hashibira - Demon Slayer', 'R$ 109,90', 'figure25.jpg', false], [4, 'Action Figure Kyojuro Vibration Stars - Demon Slayer', 'R$ 459,90', 'figure29.jpg', false], [5, 'Action Figure Tanjiro Kamado - Demon Slayer', 'R$ 169,90', 'figure31.jpg', false], [6, 'Kit Action Figure Tanjiro e Nezuko - Kimetsu no Yaiba', 'R$ 249,90','figure33.jpg', false], [7, 'Action Figure Mitsuri Kanroji - Damon Slayer', 'R$ 309,90','figure60.jpg', false],[8, 'Action Figure Diorama Kyojuro Rengoku - Demon Slayer', 'R$ 429,90', 'figure61.jpg', false], [9, 'Action Figure Diorama Kochou Shinobu - Demon Slayer', 'R$ 1.249,90', 'figure62.jpg', false], [10, 'Action Figure Nezuko - Demon Slayer', 'R$ 1.749,90','figure63.jpg', false] ];


window.onload = function(){
    montarCardTodosProdutos();
}

function montarCardTodosProdutos(){

    document.getElementById("divTodosProdutos").innerHTML = "";

    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card-todos" >';
        conteudo += '<div class="div-img-todos">';
        conteudo += '<img src="../img/' + listaProdutos[i][3] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-descricao-todos">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';
        conteudo += '<div class="div-valor-todos">';
        conteudo += listaProdutos[i][2];
        conteudo += '</div>';

        if(listaProdutos[i][4] == false)
        {
            conteudo += '<div class="div-comprar-todos"  onclick="mudaPaginaVer()"  >';
            conteudo += 'Comprar';
            conteudo += '</div>';
        } 

        conteudo += '</div>';
        
        document.getElementById("divTodosProdutos").innerHTML += conteudo;
    }
}


function mudaPaginaIn(){
    window.location.href = "../index.html";
}

function mudaPaginaLog(){
    window.location.href = "../paginas/login.html";
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
