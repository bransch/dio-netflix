
class Filme{
    nome
    cartaz
    trailer
   
}

const filme1 = new Filme();
filme1.nome = "Cobra Kai";
filme1.cartaz ="img/mini1.jpg";

const filme2 = new Filme();
filme2.nome = "Mandalorian";
filme2.cartaz = "img/mini2.jpg"

const filme3 = new Filme();
filme3.nome = "Fate";
filme3.cartaz = "img/mini3.jpg";

const filme4 = new Filme();
filme4.nome = "Jumanji";
filme4.cartaz = "img/mini4.jpg";

const filme5 = new Filme();
filme5.nome="Bloodshot";
filme5.cartaz = "img/mini5.jpg";

const filme6 = new Filme();
filme6.nome ="A Vastidão da Noite";
filme6.cartaz = "img/mini6.jpg";

const filme7 = new Filme();
filme7.nome = "Resgate";
filme7.cartaz = "img/mini7.jpg";

const filme8 = new Filme();
filme8.nome = "La Casa de Papel";
filme8.cartaz = "img/casa-papel-poster.jpg";


var catalogo = new Array(filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8);

for(var i=0; i<catalogo.length; i++){
    var divCarrosel = document.createElement('div');
    divCarrosel.className = "item";
    document.getElementById('imagens').appendChild(divCarrosel);
    var posterCarrosel = document.createElement('img');
    posterCarrosel.src=catalogo[i].cartaz;
    posterCarrosel.className = "box-filme"
    divCarrosel.appendChild(posterCarrosel);
}