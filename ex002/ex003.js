var agora = new Date() // Recebe a data do sistema
var dia_Semana = agora.getDay// Pega o dia da variável "agora"
console.log(dia_Semana) 
switch(dia_Semana) {
    case 0: //Se o valor for "0"
        console.log("Hoje é Domingo")
        break
    case 1: //Se o valor for "1"
        console.log("Hoje é Segunda")
        break
    case 2: //Se o valor for "2"
        console.log("Hoje é Terça")
        break
    case 3: //Se o valor for "3"
        console.log("Hoje é Quarta")
        break
    case 4: //Se o valor for "4"
        console.log("Hoje é Quinta")
        break
    case 5: //Se o valor for "5"
        console.log("Hoje é Sexta")
        break
    case 6: //Se o valor for "6"
        console.log("Hoje é Sábado")
        break
    default:
        console.log("Erro! Dia inválido!")
}