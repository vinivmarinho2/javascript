let pontos_usuario = 0
let pontos_computador = 0
let empate = 0
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
function usuario() {
    escolha = prompt("pedra, papel ou tesoura?").toLowerCase() // Recebe o input do usuário
    return escolha
}


function rodada(escolha_usuario, escolha_computador) {
        if (escolha_computador === "tesoura" && escolha_usuario === "papel" || escolha_computador === "papel" && escolha_usuario === "pedra" || escolha_computador === "pedra" && escolha_usuario === "tesoura") {
            pontos_computador += 1
            alert(` Usuário: ${escolha_usuario} \n Computador: ${escolha_computador} \n Você perdeu!`)
        } else if (escolha_computador == escolha_usuario) {
            empate += 1
            alert(`Usuário: ${escolha_usuario}\nComputador: ${escolha_computador}\nEmpatou!`)
        } else {
            pontos_usuario += 1
            alert(`Usuário: ${escolha_usuario} \nComputador: ${escolha_computador}\nVocê venceu`) 
        }
        return [pontos_computador, pontos_usuario] // retorna um array
}
function jogar(){
    for(let contador = 1; contador <= 5; contador++){
        let escolha_usuario = usuario()
        let escolha_computador = computador()
        rodada(escolha_usuario, escolha_computador)
    }

    alert(`Vitórias: ${pontos_usuario}\nDerrotas: ${pontos_computador}\nEmpates: ${empate}`)
}
jogar()

