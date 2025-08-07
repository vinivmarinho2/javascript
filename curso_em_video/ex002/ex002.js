var agora = new Date() // Recebe a data exata do sistema
var hora = agora.getHours() // Recebe a hora da variável "agora"
console.log(`Agora são ${hora} horas`)
if (hora >=5 && hora <= 12) {
    console.log("Bom dia!")
} else if (hora >= 13 && hora <= 17) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}