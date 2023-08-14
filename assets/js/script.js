var numero = document.querySelector('#numero')
var seltab = document.querySelector('#seltab')
var botao = document.querySelector('#botao')

botao.addEventListener('click', function tabuada() {

    if (numero.value.length == 0) {
        alert('Digite um valor válido!')
    } else {
        seltab.innerHTML = ''
        var numeroValor = Number(numero.value)
        mult = 0
        i = 1
        while (i <= 10) {
            mult = i * numeroValor
            var item = document.createElement('option')
            item.text = `${numeroValor} x ${i} = ${mult}`
            i++
            seltab.appendChild(item)
        }
    }

})