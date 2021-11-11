var listaProdutos =[[0, 'Action Figure Hinata Hyuga - Naruto Shippuden', 'R$ 399,90', 'figure2.jpg', false], [1, 'Action Figure Itachi Uchiha Akatsuki - Naruto Shippuden', 'R$ 399,90','figure3.jpg', false],[2, 'Action Figure Minato Namikaze - Naruto Shippuden', 'R$ 229,90', 'figure4.jpg', false], [3, 'Action Figure Sakura - Naruto Shippuden', 'R$ 179,90', 'figure5.jpg', false], [4, 'Action Figure Naruto transformação Kyuubi - Naruto', 'R$ 169,90', 'figure8.jpg', false], [5, 'Action Figure Might Guy com LED - Naruto Shippuden', 'R$ 399,90', 'figure11.jpg', false], [6, 'Action Figure Zabuza Momochi - Naruto Clássico', 'R$ 319,90', 'figure13.jpg', false], [7, 'Action Figure Sasuke - Naruto Shippuden', 'R$ 519,90', 'figure14.jpg', false], [8, 'Action Figure Konan Akatsuki - Naruto Shippuden', 'R$ 549,90', 'figure16.jpg', false], [9, 'Action Figure Kakashi Hatae - Naruto', 'R$ 249,90', 'figure17.jpg', false], [10, 'Action Figure 2 personagens Hashirama e Tobirama - Naruto', 'R$ 299,90','figure18.jpg', false], [11, 'Action Figure Itachi Uchiha Akatsuki - Naruto Shippuden', 'R$ 1.640,00', 'figure19.jpg', false], [12, 'Action Figure Madara Uchiha - Naruto Shippuden', 'R$ 374,90','figure21.jpg', false], [13, 'Action Figure Naruto Uzumaki 7º Hokage - Naruto', 'R$ 399,90', 'figure28.jpg', false], [14, 'Action Figure Kisame Hoshigakki Samehada - Naruto Shippuden', 'R$ 1.399,90','figure30.jpg', false], [15, 'Action Figure Sasori Técnica de Marionetes - Naruto Shippuden', 'R$ 1.930,00', 'figure32.jpg', false], [16, 'Action Figure Deidara e Tobi - Naruto Shippuden', 'R$ 199,90', 'figure64.jpg', false], [17, 'Action Figure Naruto Seis Caminhos e Kurama - Naruto', 'R$ 1.890,90', 'figure65.jpg', false], [18, 'Action Figure Pain Nagato Chibaku Tensei - Naruto Shippuden', 'R$ 249,90','figure66.jpg', false],[19, 'Action Figure Kakuzo Akatsuki', 'R$ 1929,90', 'figure67.jpg', false], [20, 'Action Figure Hidan Ceifador - Naruto Shippuden', 'R$ 1.249,90', 'figure68.jpg', false], [21, 'Action Figure Kakashi Hatake Lightning blade - Naruto', 'R$ 1.989,90','figure69.jpg', false], [22, 'Action Figure Madara Uchiha Rikudou Sennin - Naruto', 'R$ 419,90', 'figure7.jpg', false]];


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
