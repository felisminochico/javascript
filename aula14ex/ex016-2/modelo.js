//alert('Olá, Mundo!');
function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!');

    }else if(p == 0 && i > f){
        alert('[ERRO]')
        p = 1

        for(var c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`;

    }else if(p == 0 && i < f){
        p = 1
        alert('[ERRO]');

        for(var c = i; c <= f; c += 1){
            res.innerHTML += `${c} \u{1F449}`;
        }
        res.innerHTML += `\u{1F3C1}`;
    }else if(i > f){
            res.innerHTML = 'Contando... <br>'

            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`;
            }
            res.innerHTML += `\u{1F3C1}`
    }else if(i < f){
        res.innerHTML = 'Contando... <br>'
        
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c}\u{1F449}`;
        }

        res.innerHTML = res.innerHTML + `\u{1F3C1}`
    }
}