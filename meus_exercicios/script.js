const select = document.querySelector("select")
const resultado = document.querySelector("div#resultado")

select.addEventListener("change", escolhe_estacao) // "change" = quando o valor selecionado mudar
function escolhe_estacao() {
    const escolha = select.value // Recebe a escolha feita
    if (escolha === "verao") {
        resultado.innerHTML = "Que legal, você prefere o verão!"
    } else if (escolha === "outono") {
        resultado.innerHTML = "Show! Bom saber que prefere o Outono"
    } else if (escolha === "primavera" ) {
        resultado.innerHTML = "Eu gosto da primavera, é muito linda!"
    } else if (escolha === "inverno") {
        resultado.innerHTML = "Essa é também é a minha favorita!"
    } else {
        resultado.innerHTML = ""
    }
}