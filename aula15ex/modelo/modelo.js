//alert('Olá, Mundo!');
function finalizar(){

    function adicionar(){
        let txtn1 = window.document.getElementsByTagName('input')[0];
        let Número = Number(txtn1.value);
        let Vetor = []
        let resultado = window.document.getElementById('select');
    
        if(txtn1.value.length == 0){
            alert('[ERRO] O campo está vazio.')
        }else if(Número > 100){
            alert('[ERRO] Número acima do pedido.')
        }else if(Número < 1){
            alert('[ERRO] Número abaixo do pedido.')
        }else{
            for(let c = 1; c <= 4; c++){
                let item = document.createElement('option');
                item.text = `Valor ${Número} adicionado.`
                resultado.appendChild(item)
            }
        }
    }

    
    txtn1 = window.document.getElementsByTagName('input')[0];
    Número = Number(txtn1.value);

    if(txtn1.value.length == 0){
        alert('[ERRO] O campo está vazio.')
    }else if(Número < 1){
        alert('[ERRO] Número abaixo do pedido.');
    }else if(Número > 100){
        alert('[ERRO] Número acima do pedido.')
    }
}