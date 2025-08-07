let numero = document.querySelector("input#id_numero")
let lista = document.querySelector("select#id_lista")
let resultado = document.querySelector("div#resultado")
let valores = []


function isNumero(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) { // Número maior que 1 e menor que 100
        return true
    } else {
        return false
    }
}

function inLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) { // Se o numero for encontrado na lista
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(numero.value) &&  !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O número ${numero.value} foi adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
        // resultado.innerHTML = `O número ${numero.value} foi adicionado à lista`
    } else{
        alert("Valor inválido ou já encontrado na lista")
    }
    numero.value = '' // O valor recebe vazio
    numero.focus() // Elemento ganha o foco do mouse
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar ")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] < menor)
                menor = valores[posicao]
            if (valores[posicao] > maior)
                maior = valores[posicao]
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos <strong>${total}</strong> números cadastrados</p>`
        resultado.innerHTML += `<p> O maior valor informado foi: <strong>${maior}</strong></p>`
        resultado.innerHTML += `<p>O menor valor informado foi: <strong>${menor}</strong></p>`
        resultado.innerHTML += `<p>Soma de todos os valores <strong>${soma}</strong></p>`
        resultado.innerHTML += `<p>Média dos valores: <strong>${media}</strong></p>`
    }
}