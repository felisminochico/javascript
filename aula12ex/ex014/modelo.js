//alert('Olá, Mundo!');

var data = new Date();
var hora = data.getHours();


function carregar(){
    window.document.getElementById('msg').innerHTML = `Agora são ${hora}h `;
    
    if(hora >= 0 && hora < 12){
        //Bom Dia!
        window.document.getElementById('imagem').src = 'fotomanha.jpg';
        window.document.body.style.backgroundColor = '#aaa8a8'
    }else if(hora >= 12 && hora < 18){
        //Boa Tarde!
        window.document.getElementById('imagem').src = 'fototarde.jpg';
        document.body.style.backgroundColor = '#5f5959'
    }else{
        //Boa Noite!
        window.document.getElementById('imagem').src = 'fotonoite.jpg';
        document.body.style.backgroundColor = '#202020';
    }
}