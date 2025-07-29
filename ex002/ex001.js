var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) { // Idade menor que 16
    console.log("Não vota")
} else if (idade >= 16 && idade < 18 || idade > 65) { // Idade maior ou igual a 16 e menor que 18 ou maior que 65
    console.log("Voto opcional")
} else { 
    console.log("Voto obrigatório")
}