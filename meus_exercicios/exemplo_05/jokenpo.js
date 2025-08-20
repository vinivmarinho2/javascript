let pontos_usuario = 0
let pontos_computador = 0
let empate = 0
let botoes = document.querySelectorAll("button")
let resultado = document.querySelector("div#resultado")
botoes.forEach((botao) => { //"ForEach" percorre todos os itens da variável "botoes"
    // Adiciona um evento de clique para cada botão 
    botao.addEventListener("click", (elemento) => { // O "elemento" em parênteses representa o objeto do evento que ocorreu
        let escolha_computador = computador()
         if (escolha_computador === "tesoura" && elemento.target.id === "papel" || escolha_computador === "papel" && elemento.target.id === "pedra" || escolha_computador === "pedra" && elemento.target.id === "tesoura") {
            pontos_computador += 1
            resultado.innerHTML = `Computador: ${escolha_computador}, Usuário: ${elemento.target.id}, Você perdeu!`
            pontos_computador += 1
         } else if (escolha_computador === elemento.target.id) {
            resultado.innerHTML = `Empatou! Ambos escolheram ${escolha_computador}`
         } else {
            resultado.textContent = `Computador: ${escolha_computador}. Usuário: ${elemento.target.id}. Você venceu!`
            pontos_usuario += 1
         }
    })
})

function computador() { // Sorteia a escolha do computador
    escolha = Math.floor(Math.random() * 3) // Sorteia entre "0, 1, 2"
    if (escolha === 0) {
        escolha = "pedra"
    } else if (escolha === 1) {
        escolha = "papel"
    } else {
        escolha = "tesoura"
    }
    return escolha
}



