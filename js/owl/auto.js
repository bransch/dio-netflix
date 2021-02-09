
class Catalogo{
    nome
    cartaz
    trailer
}

const filme1 = new Catalogo();
filme1.nome = "Cobra Kai";
filme1.cartaz ="img/mini1.jpg";
filme1.trailer = "https://www.youtube.com/embed/2Ux1tX7dazw";

const filme2 = new Catalogo();
filme2.nome = "Mandalorian";
filme2.cartaz = "img/mini2.jpg"
filme2.trailer = "https://www.youtube.com/embed/2Ux1tX7dazw";


const filme3 = new Catalogo();
filme3.nome = "Fate";
filme3.cartaz = "img/mini3.jpg";
filme3.trailer = "https://www.youtube.com/embed/2Ux1tX7dazw";

const filme4 = new Catalogo();
filme4.nome = "Jumanji";
filme4.cartaz = "img/mini4.jpg";
filme4.trailer = "https://www.youtube.com/embed/2Ux1tX7dazw";

const filme5 = new Catalogo();
filme5.nome="Bloodshot";
filme5.cartaz = "img/mini5.jpg";
filme5.trailer = "https://www.youtube.com/embed/2Ux1tX7dazw";

const filme6 = new Catalogo();
filme6.nome ="A Vastidão da Noite";
filme6.cartaz = "img/mini6.jpg";
filme6.trailer = "https://www.youtube.com/embed/2Ux1tX7dazw";

const filme7 = new Catalogo();
filme7.nome = "Resgate";
filme7.cartaz = "img/mini7.jpg";
filme7.trailer = "https://www.youtube.com/embed/2Ux1tX7dazw";

const filme8 = new Catalogo();
filme8.nome = "La Casa de Papel";
filme8.cartaz = "img/casa-papel-poster.jpg";
filme8.trailer = "https://www.youtube.com/embed/2Ux1tX7dazw";


var filmes = new Array(filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8)
var i = 0;

for(i=0; i<filmes.length; i++){
    var espaco = document.createElement('div');
    espaco.className = "item";
    document.getElementById('imagens').appendChild(espaco);
    var carro = document.createElement('img');
    carro.src=filmes[i].cartaz;
    carro.className = "box-filme"
    espaco.appendChild(carro);
}