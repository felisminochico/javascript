function contar(){
    var inicio = window.document.getElementById('txtn1');
    var fim = window.document.getElementById('txtn2');
    var passo = window.document.getElementById('txtn3');
    var resultado = window.document.getElementById('saida');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Preencha os dados para executar corretamente o programa.');
    }else if(Number(passo.value) == 0){
        alert('[ERRO] O valor do passo não pode ser igual a 0.');
    }else if(Number(inicio.value) >= Number(fim.value)){
        var c = Number(inicio.value)
        while(c >= Number(fim.value)){
            window.document.write(c + '<br>');
            c = c - Number(passo.value);
        }
    }else{
        var c = Number(inicio.value);
        while(c <= Number(fim.value)){
        window.document.write(c + '<br>')
        c = c + Number(passo.value);
    }
    }

    //window.document.getElementById('saida').innerHTML = passo.value
}