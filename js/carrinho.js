
window.onload = function(){

    var listaProdutos = JSON.parse(window.localStorage.getItem("carrinho"));
    for(var i = 0; i < listaProdutos.length; i++) {

        montarCardTodosProdutos();
    }  

    
}

var listaProdutos = JSON.parse(window.localStorage.getItem("carrinho"));

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
            conteudo += '<div class="div-comprar-todos"  onclick="comprar(' + listaProdutos[i][0] + ')"  >';
            conteudo += 'Comprar';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<div class="div-comprar-todos div-comprado-todos"   >';
            conteudo += 'Adicionado ao Carrinho';
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