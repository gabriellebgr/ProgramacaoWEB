var listaProdutos = [ [0, 'Action Figure Super Boo - Dragon Ball Z', 'R$ 1.399,90','figure24.jpg', false], [1, 'Action Figure Goku SSJ Estilo Yardrat - Dragon Ball Legends', 'R$ 229,90', 'figure26.jpg', false], [2, 'Action Figure Goku Black Super Saiyajin', 'R$ 389,90', 'figure47.jpg', false], [3, 'Action Figure Freeza - Dragon Ball Z', 'R$ 139,90','figure48.jpg', false],[4, 'Action Figure Majin Boo - Dragon Ball Z', 'R$ 189,90', 'figure49.jpg', false], [5, 'Action Figure Gou - Dragon Ball Z', 'R$ 249,90', 'figure50.jpg', false], [6, 'Action Figure Vegeta Super Saiyajin - Dragon Ball', 'R$ 229,90','figure51.jpg', false],
[7, 'Action Figure Kid Goku Nimbus - Dragon Ball', 'R$ 249,90', 'figure52.jpg', false], [8, 'Shenlong com LED- Dragon Ball Z', 'R$ 449,90', 'figure53.jpg', false], [9, 'Action Figure Android Nº18 - Dragon Ball', 'R$ 199,90','figure54.jpg', false],[10, 'Action Figure Android 17 Bandai - Dragon Ball Z', 'R$ 1.099,90', 'figure55.jpg', false], [11, 'Action Figure Cell Diorama - Dragon Ball Z', 'R$ 269,90', 'figure56.jpg', false]];


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
