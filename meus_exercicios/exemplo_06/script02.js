let botao = document.getElementById("botao")
function teste() {
    alert("Testando a minha função")
}
// Fazendo o evento sem criar um função: (usando arrow function)
/* botao.addEventListener("click", () => {
    alert("Consegui")

}) */
// Fazendo o evento com a função "teste"
botao.addEventListener("click", function (teste) {
    teste.target.style.background = "red"
})