function contar() {
    let inicio = document.querySelector("input#id_inicio")
    let fim = document.querySelector("input#id_fim")
    let passo = document.querySelector("input#id_passo")
    let resultado = document.querySelector("div#resultado")
    if (inicio.value == 0 || fim.value == 0 ) {
        alert("Valor não pode ser 0")
    } else{
        
        let i = Number(inicio.value) // Recebe o valor de "inicio" e converte para Número
        let f = Number(fim.value) // Recebe o valor de "fim" e converte para Número
        let p = Number(passo.value) // Recebe o valor de "passo" e converte para Número
        if (p <= 0) {
            alert("Passo inválido! Considerando passo 1")
            p = 1
        }
        if (i < f) { // Se o valor de início for maior que o valor de fim
            resultado.innerHTML = "<strong>Contagem Crescente:</strong> <br>"
            for (let contador = i; contador <= f; contador += p){ // for (início;teste;incremento)
            resultado.innerHTML += `${contador} \u{1F449} `
        }
        resultado.innerHTML += `\u{1F3C1}`
        } else { // Se o valor de fim for maior que início
            resultado.innerHTML = "<strong>Contagem Decrescente:</strong> <br>"
            for (contador = i; contador >= f; contador -= p)
                resultado.innerHTML += `${contador}  \u{1F449}`
        }
        
    }
        
}