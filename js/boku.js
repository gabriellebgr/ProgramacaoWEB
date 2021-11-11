var listaProdutos = [[0, 'Action Figure Kirishima Eijo - Boku no Hero', 'R$ 169,90', 'figure37.jpg', false], [1, 'Action Figure Todoroki Shoto - Buku no Hero', 'R$ 159,90', 'figure38.jpg', false], [2, 'Action Figure Katsuki Bakugo - Boku no Hero', 'R$ 169,90','figure39.jpg', false],[3, 'Action Figure Midoriya Izuku - Boku no Hero', 'R$ 129,90', 'figure40.jpg', false], [4, 'Action Figure Todorokki Shoto - Boku no Hero', 'R$ 119,90', 'figure41.jpg', false], [5, 'Action Figure Bakugo Katsuki - Boku no Hero', 'R$ 159,90','figure42.jpg', false],[6, 'Action Figure Uraraka Ochaco - Boku no Hero', 'R$ 159,90', 'figure43.jpg', false], [7, 'Action Figure Aizawa Shouta - Boku no Hero', 'R$ 159,90', 'figure44.jpg', false], [8, 'Action Figure Dabi Toya Todoroki - Boku no Hero', 'R$ 159,90','figure45.jpg', false],[9, 'Action Figure Bakugo Katsuki - Boku no Hero', 'R$ 229,90', 'figure46.jpg', false]];


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