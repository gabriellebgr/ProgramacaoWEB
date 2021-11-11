var listaProdutos = [[0, 'Action Figure Portgas D.Ace - One Piece ', 'R$ 1.290,90','figure75.jpg', false],[1, 'Action Figure Roronoa Zoro - One Piece', 'R$ 319,90', 'figure76.jpg', false], [2, 'Action Figure Sanji Diable Jambe Premiere - One Piece', 'R$ 299,90', 'figure77.jpg', false], [3, 'Action Figure Tony Tony Chopper - One Piece', 'R$ 129,90','figure78.jpg', false],[4, 'Action Figure Roronoa Zoro Kimono Kabuki - One Piece', 'R$ 649,90', 'figure79.jpg', false], [5, 'Action Figure Roronoa Zoro Time Skip - One Piece', 'R$ 990,90', 'figure80.jpg', false], [6, 'Action Figure Money D Luffy Gomu Gomu No Gatling - One Piece', 'R$ 499,90','figure81.jpg', false],
[7, 'Action Figure Nami - One Piece', 'R$ 199,90', 'figure82.jpg', false], [8, 'Action Figure Nami Flag Diamon Ship - One Oiece', 'R$ 169,90', 'figure83.jpg', false], [9, 'Action Figure Nico Robin Asas do Sonho - One Piece', 'R$ 2.067,90','figure84.jpg', false], [10, 'Action Figure Monkey D Luffy - One Piece', 'R$ 199,90', 'figure85.jpg', false]];


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
