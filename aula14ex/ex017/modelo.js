//alert('Olá, Mundo!');
function tabuada(){
    let num = document.getElementById('txtn');
    let sel = document.getElementById('seltab');

    if(num.value.length == 0){
        window.alert('Por favor, digite um número.');
    }else{
        let n = Number(num.value);
        var c = 1
        sel.innerHTML = ''
        while(c <= 12){
            let item = document.createElement('option');
            item.text = `${n}x${c} = ${n*c}`;
            item.value = `tab${c}`
            sel.appendChild(item);
            c++
        }
    }
}