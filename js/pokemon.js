var listaProdutos = [ [0, 'Action Figure Pikachu Charizard Mew - Pokémon', 'R$ 359,90', 'figure1.jpg', false], [1, 'Action Figure Mini Pikachu moletom - Pokémon', 'R$ 89,90','figure27.jpg', false], [2, 'Action Figure Charizard com Ash e Pikachu - Pokémon', 'R$ 269,90', 'figure70.jpg', false], [3, 'Action Figure Genger versãode Batalha - Pokémon', 'R$ 199,90', 'figure71.jpg', false], 
[4, 'Action Figure Mewtwo versão Batalha - Pokémon', 'R$ 209,90','figure72.jpg', false]];



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
