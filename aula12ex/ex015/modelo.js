//alert('Olá, Mundo!');
function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');
    
    if(Number(fano.value.length) == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente.');
    }else{
        
    }

    var idade = ano - Number(fano.value);
    var fsex = window.document.getElementsByName('radsex');
    var genero = '';
    window.document.createElement('h2');
    var imagem = window.document.createElement('img');
    imagem.setAttribute('id', 'foto');

    if(fsex[0].checked){
        genero = 'Homem';
        if(idade >= 0 && idade < 11){
            //Criança
            imagem.setAttribute('src', 'foto-bebe-m.png');
        }else if(idade >= 11 && idade < 18){
            //Adolescente
            imagem.setAttribute('src', 'foto-jovem-m.png');
        }else if(idade >= 18 && idade < 49){
            //Adulto
            imagem.setAttribute('src', 'foto-adulto-m.png');
        }else if(idade >= 50){
            imagem.setAttribute('src', 'foto-idoso-m.png');
        }

        
    }else if(fsex[1].checked){
        genero = 'Mulher';
        if(idade >= 0  && idade < 11){
            //Criança
            imagem.setAttribute('src', 'foto-bebe-f.png');
        }else if(idade >= 11 && idade < 18){
            imagem.setAttribute('src', 'foto-jovem-f.png');
        }else if(idade >= 18 && idade < 50){
            //Adulto
            imagem.setAttribute('src', 'foto-adulto-f.png');
        }else if(idade >= 50){
            imagem.setAttribute('src', 'foto-idoso-f.png');
        }

    }
    res.style.textAlign = 'center';
    res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos de idade.'
    res.appendChild(imagem);
}
