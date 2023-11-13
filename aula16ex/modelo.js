//alert('Olá, Mundo!');
let num = window.document.getElementsByTagName('input')[0];
let select = window.document.getElementById('select');
let res = window.document.getElementsByClassName('res')[0];
let valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = window.document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        select.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('[ERRO] Valor inválido ou já encontrado.')
    }

    num.value = '';
    num.focus()
}

window.document.getElementsByTagName('button')[1].addEventListener('click', finalizar);

function finalizar(){
    if(valores.length == 0){
        alert('[ERRO] Adicione valores antes de finalizar.')
    }else{
        let total = valores.length;
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]
        let média = 0

        for(posição in valores){
            if(maior < valores[posição]){
                maior = valores[posição]
            }
            if(menor > valores[posição]){
                menor = valores[posição];
            }
            soma = soma + valores[posição]
        }

        média = soma / total

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} valores cadastrados.</p>`
        res.innerHTML += `A soma entre os valores cadastrados é ${soma}.</p>`;
        res.innerHTML += `<p>O maior valor cadastrado é ${maior}.</p>`;
        res.innerHTML += `<p>O menor número cadastrado é ${menor}.</p>`;
        res.innerHTML += `<p>A média entre os valores cadastrados é ${média}`;
    }
}