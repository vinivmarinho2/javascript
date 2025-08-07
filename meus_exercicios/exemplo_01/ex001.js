const botao = document.querySelector("button")

function saudacao() {
    const nome = prompt("Qual é o seu nome?")
    const saudacao = document.querySelector("div#saudacao")
    saudacao.textContent = `Olá, ${nome}, como você está?`
}
botao.addEventListener("click", saudacao)
// "botao" se refere a variável. Quando receber um "click", chamará a função saudacao
