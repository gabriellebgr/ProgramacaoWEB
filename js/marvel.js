var listaProdutos = [ [0, 'Action Figure Iron Spider Man - Marvel Comics', 'R$ 299,90', 'figure10.jpg', false], [1, 'Action Figure Venom com luz LED - Marvel', 'R$ 489,90','figure15.jpg', false], [2, 'Action Figure Loki - Marvel', 'R$ 349,90', 'figure20.jpg', false], [3, 'Action Figure Feiticeira Escrlete e Visão - Marvel', 'R$ 399,90', 'figure34.jpg', false], [4, 'Action Figure Iron Man - Marvel', 'R$ 449,90','figure36.jpg', false], [5, 'Action Figure Venon Vs Spider Man - Marvel Comics', 'R$ 399,90','figure57.jpg', false],[6, 'Action Figure Homem Aranha PS4 - Marvel', 'R$ 329,90', 'figure58.jpg', false], [7, 'Action Figure Spider Gwen - Marvel', 'R$ 209,90', 'figure59.jpg', false], [8, 'Action Figure Thanos Guerra Infinita - Marvel', 'R$ 289,90', 'figure73.jpg', false], [9, 'Action Figure Doutor Estranho - Marvel Comics', 'R$ 399,90', 'figure74.jpg', false]];


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
