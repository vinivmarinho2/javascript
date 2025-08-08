const select = document.querySelector("select")
const resultado = document.querySelector("div#resultado")

select.addEventListener("change", escolhe_clima)

function escolhe_clima() {
    const escolha = select.value
    switch (escolha) {
        case "verao":
            resultado.innerHTML = "verao"
            break
        case "outono":
            resultado.innerHTML = "outono"
            break

        case "primavera":
            resultado.innerHTML = "primavera"
            break
        case "inverno":
            resultado.innerHTML = "inverno"
            break
        default:
            resultado.innerHTML = "falhou"
    }
}